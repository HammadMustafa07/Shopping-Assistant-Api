
---

# 🛒 MyShopping Assistant API

Welcome to **MyShopping Assistant API** — a lightweight, easy-to-use public API for fetching shopping products by **name** or **category**.

Whether you’re building a chatbot, AI assistant, or a prototype shopping app — this API gives you instant access to a curated list of products for testing, learning, or development purposes.

---

## 🎯 Why MyShopping Assistant API?

In a world full of AI-powered apps and chatbots, developers often need quick access to sample product data for:

* AI demos and prototypes
* E-commerce frontends
* Agentic AI assistants
* Chainlit-based shopping bots

**MyShopping Assistant API** fills that gap by providing a simple, query-ready product API that works out of the box — no authentication, no complex setup.

---

## 🚀 What Does It Offer?

* ✅ **Public Access** — Ready for testing and learning
* ✅ **Product Search by Name**
* ✅ **Category-Based Filtering**
* ✅ Clean, structured JSON responses
* ✅ Perfect for AI chat interfaces, demos, and hackathons

---

## 🛠️ How to Use

### API Endpoint

```http
GET https://your-deployed-url/api/getproductsdata  
```

### Query Parameters

| Parameter  | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| `name`     | string | Search by product name (optional)     |
| `category` | string | Filter by product category (optional) |

### Example Request

```http
GET /api/getproductsdata
GET /api/getproductsdata?productName=glasses  

GET /api/getproductsbycategory  
GET /api/getproductsbycategory?category=glasses  
```

### Example Response

```json
{  
  "products": [  
    {  
      "id": "1",  
      "name": "Polarized UV Protection Sunglasses - Navy Blue",  
      "description": "Stylish sunglasses with polarized lenses and UV400 protection.",  
      "price": 4500,  
      "category": "sunglasses"  
    }  
  ]  
}  
```

---

## 🔧 Built With

* **Next.js API Routes**
* **TypeScript**
* **OpenAI SDK & Chainlit** (for frontend integration)

---

## 📂 Use Cases

* AI Chatbot Integration
* Frontend Product Displays
* Testing & Prototyping
* Learning API Fetching

---

## 🙏 Special Thanks

I want to thank my teachers, mentors, and peers for guiding me in bringing this idea to life. Your support inspires me to build and share more with the community.

