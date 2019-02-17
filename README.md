# Bamazon

#Bamazon

**Before use, install packages *npm install***

This project was to create an app that shows the entire inventory stock information.
1. The ID number
2. The product name
3. The department name
4. The price
5. Quantity in stock

By using the terminal and typing *node bamazonCustomer.js* the app will show the above information for all available products.
The user will then be prompted to select an ID number to pick the related item and asks what quantity that the user would like to purchase.
If there is enough stock, the user's order will be fulfilled. Otherwise, it will say *insufficient stock* and asks if the user would like to start again.

1. Log into app.
2. Full stock information
![FullSearch](/screenshots/FullSearch.PNG)
3. User picks an item by ID
![IDSearch](/screenshots/PromptIDSearch.PNG)
4. User picks the quantity ![PromptUnits](/screenshots/SearchedIDPromptUnits.PNG)
    * If enough stock, the order will be fulfilled
    ![Fulfilled](/screenshots/OrderFulfilled.PNG)
    * If not enough stock, the order will not be fulfilled, choose to start again
    ![Insufficient](/screenshots/InsufficientQuantity.PNG)

