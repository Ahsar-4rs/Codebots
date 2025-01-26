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
    "output: \"Hello!\" I am Shopmate how can I assist you today? Are you looking for a specific product? As of now we have these categories of products\n1.Beverages\\n2.Clothes\n3.Cosmetics\n4.Groceries\n5.Household\n6.KitchenWare\n7.Snacks\n8.Stationaries",
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
    "output: Keep going!!",
    "input: 7up",
    "output: Refreshing lemon-lime flavored soda.\n,price: 40,discount: 10%,Refreshing lemon-lime flavored soda.,rating: 4.3,new_price: 36,",
    "input: appy fizz",
    "output: Sparkling apple-flavored drink. ,price: 50,discount: 5%,Sparkling apple-flavored drink.,rating: 4.5,new_price: 47.5,!!",
    "input: Coca Cola",
    "output: A classic cola soft drink priced at ₹50, now available at a discounted price of ₹47.5. It boasts a customer rating of 4.6!!",
    "input: Coffee",
    "output: A rich and aromatic coffee priced at ₹150, discounted to ₹135 . Highly rated with a score of 4.8.!!",
    "input: Fanta",
    "output: A citrusy orange-flavored soda priced at ₹40, now available for ₹36 . It holds a rating of 4.2!!",
    "input: Abaya",
    "output: An elegant abaya designed for a sophisticated look. Priced at ₹1200, now available at ₹1080 after a 10% discount. It holds a high customer rating of 4.7.!!",
    "input: Caps",
    "output: Stylish caps perfect for casual outings. Originally priced at ₹300, available at a discounted price of ₹285 (5% off). Rated 4.2 by customers.!!",
    "input: Churidar",
    "output: Comfortable churidar suitable for everyday wear. Priced at ₹800 with a 15% discount, now available at ₹680. It has an excellent rating of 4.6.!!",
    "input: Coats",
    "output: A stylish coat designed for formal occasions. Originally priced at ₹2500, it’s now available for ₹2000 after a 20% discount. Rated 4.5 by customers.!!",
    "input: Dhothi",
    "output:A traditional dhoti perfect for festive occasions. Priced at ₹700, now discounted to ₹630 (10% off). This item enjoys a high customer rating of 4.8.!!",
    "input: Blush",
    "output:Add a vibrant pop of color to your cheeks with this blush. Priced at ₹500, now available for ₹450 after a 10% discount. Rated 4.5 by customers.!!",
    "input: Colour Corrector",
    "output:Perfect your complexion with this effective color corrector. Originally priced at ₹600, it's now ₹510 with a 15% discount. It has an impressive rating of 4.7.!!",
    "input: Concealer",
    "output:Hide blemishes and dark circles with this creamy concealer. Available for ₹630 after a 10% discount on the original price of ₹700. Customer rating: 4.6.!!",
    "input: Eyelash Extension",
    "output:Achieve luscious lashes effortlessly with these easy-to-apply extensions. Priced at ₹1200, now available at ₹1140 with a 5% discount. Rated 4.8 by users.!!",
    "input: Eye Shadow",
    "output:Create stunning looks with this vibrant eye shadow palette. Originally ₹800, now discounted to ₹720 (10% off). Customer rating: 4.5.!!",
    "input: Eyebrow Pencil",
    "output:Define your brows easily with this eyebrow pencil. Priced at ₹400, now available at ₹380 with a 5% discount. Rated 4.4 by users.!!",
    "input: Beans",
    "output:Fresh, crunchy beans perfect for salads or stir-fries! Packed with nutrients and flavor. Priced at ₹80 per Kg, now available for ₹72 after a 10% discount. Rated 4.5 by customers.!!",
    "input: Tomato",
    "output:Fresh, Juicy Tomatoes - Nature's Flavor Bomb! Priced at ₹60 per Kg, now available for ₹51 after a 15% discount. Rated 4.8 by customers.!!",
    "input: Avocado",
    "output:Creamy and nutritious avocados, perfect for toast, salads, or guacamole! Priced at ₹200 per Kg, now available for ₹190 after a 5% discount. Rated 4.7 by customers.!!",
    "input: Apple",
    "output:Crisp and sweet apples, perfect for snacking or baking. A classic favorite! Priced at ₹150 per Kg, now available for ₹135 after a 10% discount. Rated 4.6 by customers.!!",
    "input: Onion",
    "output:Versatile onions add depth and flavor to any dish. A kitchen staple! Priced at ₹30 per Kg, now available for ₹29 after a 5% discount. Rated 4.3 by customers.!!",
    "input: Baking Utensils",
    "output:Essential baking utensils for all your baking needs! Priced at ₹350, now available for ₹315 after a 10% discount. Rated 4.5 by customers.!!",

    "input: Blender",
    "output:Powerful blender for smoothies, soups, and sauces! Priced at ₹2200, now available for ₹1870 after a 15% discount. Rated 4.8 by customers.!!",

    "input: Bowl",
    "output:Versatile bowls for mixing and serving! Priced at ₹150, now available for ₹142.50 after a 5% discount. Rated 4.6 by customers.!!",

    "input: Chopping Board Set",
    "output:Durable chopping boards for all your food prep needs. Priced at ₹250, now available for ₹225 after a 10% discount. Rated 4.7 by customers.!!",

    "input: Clay Pots",
    "output:Traditional clay pots for authentic cooking! Priced at ₹400, no discount available. Rated 4.5 by customers.!!",

    "input: AC",
    "output:Energy-efficient air conditioner. Priced at ₹30000, now available for ₹27000 after a 10% discount. Rated 4.7 by customers.!!",

    "input: Broom",
    "output:Durable broom for cleaning. Priced at ₹200, now available for ₹190 after a 5% discount. Rated 4.5 by customers.!!",

    "input: Bulb",
    "output:Energy-saving LED bulb. Priced at ₹100, now available for ₹90 after a 10% discount. Rated 4.8 by customers.!!",

    "input: Ceiling Duster",
    "output:Reach and clean high ceilings. Priced at ₹150, now available for ₹142.5 after a 5% discount. Rated 4.3 by customers.!!",

    "input: Ceiling Fan",
    "output:Efficient ceiling fan for cooling. Priced at ₹2500, now available for ₹2250 after a 10% discount. Rated 4.6 by customers.!!",

    "input: Banana Chips",
    "output:Crispy and delicious banana chips. Priced at ₹100, now available for ₹90 after a 10% discount. Rated 4.5 by customers.!!",

    "input: Biscuits",
    "output:Crunchy and tasty biscuits. Priced at ₹50, now available for ₹47.5 after a 5% discount. Rated 4.3 by customers.!!",

    "input: Bread Jam",
    "output:Sweet and tangy bread jam. Priced at ₹40, no discount available. Rated 4.2 by customers.!!",

    "input: Candies",
    "output:Assorted colorful candies. Priced at ₹30, now available for ₹27 after a 10% discount. Rated 4.5 by customers.!!",

    "input: Chips",
    "output:Crunchy potato chips. Priced at ₹50, now available for ₹47.5 after a 5% discount. Rated 4.6 by customers.!!",
    f"input: {input_text}",
    "output: ",
    ])

    return response.text
#while True:
   # string =str(input("enter your prompt:"))
   # print(GenerateResponse(string))
