import os
import google.generativeai as genai

genai.configure(api_key="AIzaSyAYduIVXFJo7JtbztF5YxLJ_t_NwyO2Q8Q")

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash-exp",
  generation_config=generation_config,
)
def GenerateResponse(input_text):
    response = model.generate_content([
    "input: \"Hi!\"",
    "output: Hello! I am Shopmate how can I assist you today? Are you looking for a specific product? As of now we have these categories of products \n 1.Beverages\n  2.Clothes\n 3.Cosmetics  \n4.Groceries    \n5.Household  \n6.KitchenWare    \n7.Snacks    \n8.Stationaries",
    "input: \"Hello!\"",
    "output: \"Hi there! \"I am Shopmate \n What can I help you with today? Do you have any questions about our products?  As of now we have these categories of products\n1.Beverages\n2.Clothes\n3.Cosmetics\n4.Groceries\n5.Household\n6.KitchenWare\n7.Snacks\n8.Stationaries",
    "input: \"Hey!\"",
    "output: \"Hey!\" I am Shopmate thanks for reaching out. What are you interested in today? I’m here to help!  As of now we have these categories of products\n1.Beverages\n2.Clothes\n3.Cosmetics\n4.Groceries\n5.Household\n6.KitchenWare\n7.Snacks\n8.Stationaries",
    "input: Beverages",
    "output: \"Thankyou for the response\"!!Kindly proceed to 4th floor.\n7 Up - ₹40\nAppy Fizz - ₹50\nCoca Cola - ₹50\nCoffee - ₹150\nFanta - ₹40",
    "input: Clothes",
    "output: \"Thankyou for the response\"!!Kindly proceed to 6th floor.\nAbaya - ₹1200\nCaps - ₹300\nChuridar - ₹800\nCoats - ₹2500\nDhoti - ₹700",
    "input: Cosmetics",
    "output: \"Thankyou for the response\"!!Kindly proceed to 5th floor.\nBlush - ₹500\nColour Corrector - ₹600\nConcealer - ₹700\nEyelash Extension - ₹1200\nEye Shadow - ₹800",
    "input: Groceries",
    "output: \"Thankyou for the response\"!!Kindly proceed to 2nd floor.\nBeans - ₹80\nTomato - ₹60\nAvocado - ₹200\nApple - ₹150\nOnion - ₹30",
    "input: Household",
    "output: \"Thankyou for the response\"!!Kindly proceed to 8th floor.\nAC - ₹30000\nBroom - ₹200\nBulb - ₹100\nCeiling Fan - ₹2500\nFridge - ₹25000",
    "input: KitchenWare",
    "output: \"Thankyou for the response\"!!Kindly proceed to 7th floor.\nBaking Utensils - ₹350\nBlender - ₹2200\nBowl - ₹150\nChopping Board Set - ₹250\nClay Pots - ₹400",
    "input: Snacks",
    "output: \"Thankyou for the response\"!!Kindly proceed to 1st floor.\nBanana Chips - ₹100\nBiscuits - ₹50\nBread Jam - ₹40\nCandies - ₹30\nChips - ₹50",
    "input: Stationaries",
    "output: \"Thankyou for the response\"!!Kindly proceed to 3rd floor.\nA4 Paper - ₹200\nAcrylic Colors - ₹500\nBag - ₹800\nCalculator - ₹300\nChalk - ₹50",
    "input: Thankyou",
    "output: Thank You!! Have you finished you shopping",
    "input: Yes",
    "output: Thankyou !!You may proceed to checkout...",
    "input: No",
     "input: prices",
    "output: I'm sorry, I don't have a way to list the prices of all items at once. However, if you select a category, I can show you the products and their prices in that category."
    "output: Keep going!!",
    "input: 7 UP",
    "output:  "Refreshing lemon-lime flavored soda.",price: 40,  ₹discount: 10% ,new_price: 36,",
    f"input: {input_text}",
    "output: ",

    ])

    return response.text
#while True:
   # string =str(input("enter your prompt:"))
   # print(GenerateResponse(string))
