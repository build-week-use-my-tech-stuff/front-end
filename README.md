**Front-End Repo for Use-My-Tech-Stuff Build Week.**

potentially doing app contains Login, Register, UserHome App has links to home, Login, Register, and Protected(replace with User Home) home can contain the header links along with mission statement or whatever. UserHome then contains link to Users and displaying component ItemList which contains all items. So login/register direct you to UserHome. UserHome displays all photos, while allowing navigation to Users. ItemList contains all the items, **Clickable to expand 1 item to see all details could contain link to ItemForm to separate components, then formsubmit function could push back to itemlist Users which displays all Users/their info.

**Demo-User Info:** 

    techRenterGuy | pass
    sasha1010 | pass
    LambdaGrad | pass

**Styling Method:** Styled Components.

**API:** https://usemytech.herokuapp.com/

**End Points:**

    Post Login -> https://usemytechstuff.herokuapp.com/api/auth/register
    Post Register -> https://usemytechstuff.herokuapp.com/api/auth/login
    Get Items -> https://usemytechstuff.herokuapp.com/api/tech
    Add Items -> https://usemytechstuff.herokuapp.com/api/tech
    Delete Items -> https://usemytechstuff.herokuapp.com/api/tech
    Update Items -> https://usemytechstuff.herokuapp.com/api/tech
    Add Comments ->

**Functions:**

    Login -> Using Username and Password
    Register -> able to create account and input username, password, 
                email, first name,last name, location, phone number, and a profile picture.

    Gets Item data -> gets the tech items
    Add Item -> Add a new item listing.
    Delete Item -> Delete an item listing.
    Update Item -> Update an Item listing
