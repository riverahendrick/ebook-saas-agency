## Chapter 5: Advanced Polymarket Strategies - Expected Value and Sizing

You know how to pull the data and place the order. But if you size your bets incorrectly, a single bad trade will wipe out ten good ones. This is where the math of the Wealth Engine separates the tourists from the professionals.

### The Mathematics of Expected Value (EV)
Every trade you make must have a positive Expected Value ($EV > 0$). If you are blindly buying based on news without calculating EV, you are gambling.

$EV = (P_{win} \times V_{win}) - (P_{loss} \times V_{loss})$

- $P_{win}$: Your calculated probability of the event occurring based on the news.
- $V_{win}$: The profit if you win.
- $P_{loss}$: The probability of the event not occurring.
- $V_{loss}$: The amount you lose if you are wrong.

Example: A breaking news article strongly suggests the SEC will approve a Bitcoin ETF tomorrow. Your NLP model assigns an 80% probability to this event based on historical sentiment analysis of similar articles. The current price of the "Yes" contract is 60 cents.
If you buy 1 contract for $0.60:
- If you win (payout is $1.00), profit is $0.40.
- If you lose, you lose $0.60.

$EV = (0.80 \times \$0.40) - (0.20 \times \$0.60) = \$0.32 - \$0.12 = \$0.20$

Since $EV = \$0.20 > 0$, this is a highly profitable trade. Your bot must compute this instantly before firing the API request.

### The Kelly Criterion for Position Sizing
Never bet your entire bankroll on one trade. The Kelly Criterion determines the optimal size of a series of bets to maximize long-term growth and avoid ruin.

$f^* = \frac{p \times b - q}{b}$
Where:
- $f^*$: The fraction of your bankroll to wager.
- $b$: The odds received on the wager ($V_{win} / V_{loss}$).
- $p$: Probability of winning.
- $q$: Probability of losing ($1 - p$).

Using our ETF example:
- $b = 0.40 / 0.60 = 0.666$
- $p = 0.80$
- $q = 0.20$

$f^* = \frac{0.80 \times 0.666 - 0.20}{0.666} = \frac{0.533 - 0.20}{0.666} = \frac{0.333}{0.666} = 0.50$ (50%)

The pure Kelly formula suggests betting 50% of your bankroll. This is mathematically optimal but practically suicidal due to estimation errors in $p$. 
**Rule of thumb:** Always use "Half-Kelly" or "Quarter-Kelly." If the formula says 50%, your bot should bet a maximum of 12.5% to 25% of its available capital.

```python
def calculate_kelly_fraction(probability_win, current_price):
    b = (1 - current_price) / current_price
    p = probability_win
    q = 1 - p
    
    f_star = (p * b - q) / b
    
    # Apply Quarter-Kelly for safety
    safe_allocation = f_star * 0.25
    
    # Cap maximum exposure at 10% regardless
    return min(safe_allocation, 0.10)

# Inside your trade execution logic
prob = nlp_model.get_probability(headline)
price = current_market_ask
allocation_pct = calculate_kelly_fraction(prob, price)

trade_size = total_bankroll * allocation_pct
```

---

## Chapter 6: Advanced Meme Coin Sniping - Defeating MEV

When you trade on decentralized exchanges (DEXs) like Uniswap or Raydium, your transactions sit in a public mempool before they are included in a block. In that mempool, MEV (Maximal Extractable Value) bots are watching. 

If you place a large market order, an MEV bot will "sandwich" you. It will buy the token right before your transaction, pushing the price up, and sell it immediately after your transaction, extracting your capital. You are bleeding money without realizing it.

### Slippage Tolerance is Not Enough
Setting your slippage tolerance to 1% is the standard defense. But on highly volatile meme coins, a 1% slippage limit means your transaction will frequently fail (revert), costing you gas fees and causing you to miss the sniper entry entirely.

### Private RPCs and Jito Bundles (Solana)
On Solana, you defeat MEV by bypassing the public mempool entirely. You use services like Jito Labs to send your transactions directly to the block builder.

Jito allows you to send "Bundles." A bundle guarantees that your transaction is atomic and protected from sandwich attacks. You pay a small tip directly to the validator to ensure inclusion.

```javascript
// Example of submitting a private transaction via Jito on Solana
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';
import { searcherClient } from 'jito-ts/dist/sdk/block-engine/searcher';

const jitoClient = searcherClient('mainnet.block-engine.jito.wtf');
const keypair = Keypair.fromSecretKey(new Uint8Array([...]));

async function snipeTokenWithJito(transaction, tipAmount) {
    // Add the Jito tip instruction to your transaction
    transaction.add(createJitoTipInstruction(tipAmount, keypair.publicKey));
    
    // Sign the transaction
    transaction.sign([keypair]);
    
    // Compile to VersionedTransaction
    const versionedTx = new VersionedTransaction(transaction.compileMessage());
    
    try {
        // Send directly to the block engine, bypassing the public mempool
        const bundleId = await jitoClient.sendBundle([versionedTx]);
        console.log(`Bundle sent securely! ID: ${bundleId}`);
    } catch (error) {
        console.error("MEV Protection failed:", error);
    }
}
```

### Flashbots (Ethereum)
If you are sniping on Ethereum, the equivalent is Flashbots. You send your raw, signed transaction directly to the Flashbots relay. 
The Flashbots Protect RPC gives you a simple endpoint (`https://rpc.flashbots.net`) to route your MetaMask or bot transactions through. If you are serious, you write custom Go or Python code to interact with the Flashbots API, calculating exactly how much Gwei to bribe the builder for first-block inclusion.

By using these private routing mechanisms, you ensure your execution price is exactly what your bot calculated. Zero slippage extraction. Zero sandwich attacks. Just clean, aggressive wealth extraction.