import streamlit as st
import random
import time
import ShopmateBend
from pymongo import MongoClient




import streamlit as st
# Connect to MongoDB
client = MongoClient('mongodb+srv://pavitrak270504:mnbvc0987@cluster0.0nc8j.mongodb.net/')  # Replace with your MongoDB connection string
db = client['sos']  # Replace with your database name
collection = db['products']  # Replace with your collection name

results = collection.find()  # This retrieves all documents in the collection
# Initialize the cart
if 'cart' not in st.session_state:
    st.session_state.cart = []

# Function to add item to cart
def add_to_cart(item, quantity):
    st.session_state.cart.append({'item': item, 'quantity': quantity})

# Sidebar for item selection
st.sidebar.header("Select Items")

# List of categories
items = ["Kitchen", "Clothes", "Cosmetics", "Groceries", "Snacks", "Beverages", "Stationaries", "Households"]

# Create a dropdown for item selection
selected_item = st.sidebar.selectbox("Choose a category", items)

st.sidebar.title("Product List")
i=0
# Display products from MongoDB
for product in results:
    if (product['category'].lower()==selected_item.lower()):
        st.sidebar.write(f"**{product['name']}** - ₹{product['price']}")
        # Quantity input
        quantity = st.sidebar.number_input(f"Quantity:  ", min_value=0, max_value=100, value=0, key=product['_id'])


# Based on the category selected, show the respective item options
if selected_item == "Groceries":
    grocery_items = ["Beans", "Tomato", "Avocado", "Apple", "Onion"]
    selected_groceries = st.sidebar.multiselect("Select Groceries", grocery_items)
    for grocery in selected_groceries:
        if st.sidebar.button(f"Add {grocery} to Cart"):
            add_to_cart(grocery, quantity)
            st.sidebar.success(f"{quantity} x {grocery} added to cart!")

elif selected_item == "KitchenWare":
    kitchen_items = ["Baking Utensils", "Blender", "Bowl", "Chopping Board Set", "Clay Pots"]
    selected_kitchenware = st.sidebar.multiselect("Select Kitchenware", kitchen_items)
    for item in selected_kitchenware:
        if st.sidebar.button(f"Add {item} to Cart"):
            add_to_cart(item, quantity)
            st.sidebar.success(f"{quantity} x {item} added to cart!")

elif selected_item == "Clothes":
    clothes_items = ["Abaya", "Caps", "Churidar", "Coats", "Dhoti"]
    selected_clothes = st.sidebar.multiselect("Select Clothes", clothes_items)
    for item in selected_clothes:
        if st.sidebar.button(f"Add {item} to Cart"):
            add_to_cart(item, quantity)
            st.sidebar.success(f"{quantity} x {item} added to cart!")

elif selected_item == "Cosmetics":
    cosmetics_items = ["Blush", "Colour Corrector", "Concealer", "Eyelash Extension", "Eye Shadow", "Eyebrow Pencil"]
    selected_cosmetics = st.sidebar.multiselect("Select Cosmetics", cosmetics_items)
    for item in selected_cosmetics:
        if st.sidebar.button(f"Add {item} to Cart"):
            add_to_cart(item, quantity)
            st.sidebar.success(f"{quantity} x {item} added to cart!")

elif selected_item == "Snacks":
    snacks_items = ["Banana Chips", "Biscuits", "Bread Jam", "Candies", "Chips"]
    selected_snacks = st.sidebar.multiselect("Select Snacks", snacks_items)
    for item in selected_snacks:
        if st.sidebar.button(f"Add {item} to Cart"):
            add_to_cart(item, quantity)
            st.sidebar.success(f"{quantity} x {item} added to cart!")

elif selected_item == "Beverages":
    beverages_items = ["Coca Cola", "Coffee", "Fanta", "Frooty"]
    selected_beverages = st.sidebar.multiselect("Select Beverages", beverages_items)
    for item in selected_beverages:
        if st.sidebar.button(f"Add {item} to Cart"):
            add_to_cart(item, quantity)
            st.sidebar.success(f"{quantity} x {item} added to cart!")

elif selected_item == "Stationaries":
    stationaries_items = ["Pens", "Pencils", "Notebooks", "Markers", "Erasers"]
    selected_stationaries = st.sidebar.multiselect("Select Stationaries", stationaries_items)
    for item in selected_stationaries:
        if st.sidebar.button(f"Add {item} to Cart"):
            add_to_cart(item, quantity)
            st.sidebar.success(f"{quantity} x {item} added to cart!")

elif selected_item == "Households":
    households_items = ["AC", "Broom", "Bulb", "Ceiling Duster", "Ceiling Fan"]
    selected_households = st.sidebar.multiselect("Select Household Items", households_items)
    for item in selected_households:
        if st.sidebar.button(f"Add {item} to Cart"):
            add_to_cart(item, quantity)
            st.sidebar.success(f"{quantity} x {item} added to cart!")

# Display the cart
st.sidebar.header("Shopping Cart")
if st.session_state.cart:
    for cart_item in st.session_state.cart:
        st.sidebar.write(f"{cart_item['quantity']} x {cart_item['item']}")
else:
    st.sidebar.write("Your cart is empty.")
    

# Close the connection
client.close()

# Print the results


# Close the connection


# Streamed response emulator
def response_generator(prompt):
    response = ShopmateBend.GenerateResponse(prompt)
    for word in response.split():
        yield word + " "
        time.sleep(0.05)


st.title("ShopMate")

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display chat messages from history on app rerun
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Accept user input
if prompt := st.chat_input("What is up?"):
    # Add user message to chat history
    st.session_state.messages.append({"role": "user", "content": prompt})
    # Display user message in chat message container
    with st.chat_message("user"):
        st.markdown(prompt)

    # Display assistant response in chat message container
    with st.chat_message("assistant"):
        response = st.write_stream(response_generator(prompt))
    # Add assistant response to chat history
    st.session_state.messages.append({"role": "assistant", "content": response})
