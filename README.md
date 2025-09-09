# Getting Started with GitHub Copilot

## GitHub Copilot for Individuals 
[Plans & pricing](https://github.com/features/copilot/plans)


## Sample Prompts

> Add 3 users to json with id name age and email

> Create a login form with bootstrap, use a drak theme, validate the form with vanilla javascript and provide a submit function to post the form to an api

> give me a prompt to connect my form with an express server
"Implement an Express.js backend for my login form. The server should have a POST /api/login endpoint that accepts JSON with email and password fields. Validate the credentials and respond with a success or error message in JSON format. Update the frontend to send login requests to this Express endpoint instead of the placeholder URL."


## AgentMode 

## Common Commands for

```
/clear

```

## Step-by-Step: Serve `index.html` with Python in GitHub Codespaces

### 1. Open the Terminal
- In your Codespace, open a new terminal window.

### 2. Navigate to Your Project Directory
- Make sure you are in the directory containing `index.html` (usually `/workspaces/github-copilot-intro`):
  ```bash
  cd /workspaces/github-copilot-intro
  ```

### 3. Start the Python HTTP Server
- Run the following command to start a simple HTTP server on port 8080:
  ```bash
  python3 -m http.server 8080
  ```

### 4. Forward Port 8080
- In the Codespaces interface, find the "Ports" tab.
- Locate port `8080` and set its visibility to **Public**.

### 5. Access Your Site
- After forwarding, you’ll see a URL for port 8080 in the Ports tab.
- Open this URL in your browser to view your `index.html` page.

---

**Your site is now