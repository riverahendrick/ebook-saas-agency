# TOOLS.md - Local Notes

## Twitter/X API (Free Tier)
- **Constraint:** The Free Tier API strictly prohibits following users. It only permits posting tweets (and potentially rate-limited reading).
- **Issue:** Attempted to post a tweet, but received `402 Payment Required: Your enrolled account does not have any credits to fulfill this request.` - This implies the Free tier may need to be explicitly activated or the developer account needs to be enrolled in the correct Free tier project portal.

## AgentMail
- **Status:** Verified and operational.
- **Usage:** Use the Python `agentmail` SDK. `client.inboxes.messages.send(...)`
