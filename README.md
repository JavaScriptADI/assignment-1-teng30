[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/nF5MntEO)
# Assignment 1

1. [Research](#research)
2. [Coding Problem Set](#coding-problem-set)


## Research

You're just starting your programming journey, and it's important to understand the key terms you'll be using all the time.

Look for these topics, try to understand them and explain them to any LLM (ChatGPT, Claude or any) and link your session with LLM in `conversations.txt`
✅ Your Task:
1. Look up the following topics and try to understand what they mean:
    - Hardware
    - Software
    - Terminal
    - CLI
    - GUI
    - IDE
    - Code
    - Variable
    - Bug
2. Once you feel like you understand them, open an AI assistant like ChatGPT or Claude, and try explaining each topic in your own words.
3. After your explanation, copy the link to that AI conversation.
4. Save all your links in a file called conversations.txt. Each link should be next to the topic it belongs to.

**Example for** `conversations.txt`:

```
Terminal: https://chat.openai.com/share/example1
CLI: https://chat.openai.com/share/example2
...
```
> ✅ Tip: You don’t need to get everything perfect. This task is to help you learn and build confidence. Just do your best!

❗NOTE: Conversations with the AI should be in English! (use Claude if you don't know English and use Georgian language)

## Coding problem set

### 💬 Task 1: Calculate Message Cost Based on Length

You're building a messaging automation system for businesses. In this system, users are charged based on the **length of each message**:

> 📏 **Every 100 characters cost 1 cent** (rounded up).

#### ✅ Your Task:

1. Create a variable to store the message text.
2. Create another variable to calculate the cost **based on the length of the message**.

These variables will later be used to send the message and generate an invoice.

---

#### 💡 Example:

```bash
message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nulla mauris. Quisque ut morbi."
cost = ...
```

**Expected Cost:** `1` cent
**Why?** The message is under 200 characters, so it's within the first 100 characters → `1 * 1 = 1` cent.

> **Note:** The cost must be calculated from the message length. **Do not hardcode the cost.**

---


### 🧮 Task 2: Add Tax to the Message Cost

Now that you know how to calculate the cost of a message based on its length, let's go one step further.

In real businesses, we often need to add **tax** to the final price. For this task, we'll add a **10% tax** to the original message cost.

#### ✅ Your Task:

1. Use the message and cost from the previous task.
2. Create a **new variable** to hold the **final price** after adding 10% tax.
3. The tax should be calculated **using math operations**, not hardcoded.

---

#### 💡 Example:

If the original `cost` is `2` cents:

* Tax is 10% of 2 → `0.2` cents
* Final price should be `2 + 0.2 = 2.2` cents

You should use a **math formula** like:

```bash
tax = ...
final_price = ...
```

> 💡 Hint: To calculate 10% of a number, you can multiply it by `0.1`.

---

### 🧾 Task 3: Create a Message Summary

You’ve now calculated both the cost of a message and the final price after tax. Let’s prepare a **simple summary** that can be shown to the user.

#### ✅ Your Task:

1. Use the `message`, `cost`, and `final_price` from the previous tasks.
2. Create a **new variable** called `summary`.
3. This variable should hold a sentence (a string) that tells the user:

   * What their message is
   * How much it costs before tax
   * What the final price is after tax

---

#### 💡 Example:

```bash
message = "Hello world"
cost = 1
final_price = 1.1
summary = ...
```

**Expected summary:**

```
Your message: "Hello world" costs 1 cents before tax and 1.1 cents after tax.
```

> 💡 Hint: Use `+` to join strings and `String()` to turn numbers into strings.

---


### ⭐️ Bonus Task: Long Message Warning

Sometimes, businesses might want to know if their message is getting too long. Let’s help with that!

#### ✅ Your Task:

1. Use the `message` variable from before.
2. Create a new variable called `isLong`.
3. Set `isLong` to `true` **if the message is longer than 200 characters**, or `false` otherwise.

---

#### 💡 Example:

```bash
message = "This is a short message.";
isLong = ...; # should be false
```

---

> 💡 Hint: Use `.length` to check how many characters are in the message.
> Example: `message.length > 200`

