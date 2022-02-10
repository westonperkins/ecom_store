# Warehouse {ignore=true}

##### Created by Weston Perkins {ignore=true}
[Check out the App](https://warehouse-shop.herokuapp.com/#/login/) {ignore=true}


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [What is Warehouse?](#what-is-warehouse)
- [Technologies Used](#technologies-used)
- [Page Screenshots](#page-screenshots)
- [Wireframes](#wireframes)
- [User Story](#user-story)
- [Future Plans for the site](#future-plans-for-the-site)

<!-- /code_chunk_output -->


<hr>

*to begin application from clone:*
- enter virtual environment
    - `pipenv shell`
- install all pip dependencies from pipfile.lock
    - `pipenv sync`
        - might have to do a <b>`pipenv lock`</b> before you can sync
- run server on port 8000 
    - `python3 manage.py runserver`

- start a new dev branch 
    - `git checkout -b < branch name >`

### What is Warehouse?
 Warehouse is an online marketplace for clothing and accessories to help people shop through a digital 'warehouse' of vintage and designer clothing. The seller is able to list pieces under a profile at the same time view and purchase the listings of other sellers. 

### Technologies Used
- React <i>frontend library</i>
- Django <i>python web framework backend support</i>
    - Provides: admin panel, security, sessions, authentication, etc. out of the box
- Redux <i>state handling</i>
    - App dispatches an action, the action is handled/changed by a reducer, and stored inside a store, then store sends to application
- Webpack <i>module bundler</i>
    - Takes react application and compiles to "main.js"
- Babel <i>compiler</i>
    - Transpiles Javascript to account for older syntax
- React Bootstrap <i>styling</i>
- Heroku <i>hosting</i>
- CSS
- Python
- Javascript

### Page Screenshots
![warehouse](https://user-images.githubusercontent.com/79667230/139553806-12c024de-f91e-4ca2-bbcd-168cced5d2fb.gif)

![Screen Shot 2021-09-18 at 11 24 59 AM](https://user-images.githubusercontent.com/79667230/133893990-d8e44400-fb31-4431-a68f-af106e4f2082.png)

### Wireframes
![Screen Shot 2021-08-31 at 12 08 15 AM](https://media.git.generalassemb.ly/user/34950/files/fc843800-09ef-11ec-8c18-78fd6cbe5936)
![Screen Shot 2021-08-31 at 12 07 53 AM](https://media.git.generalassemb.ly/user/34950/files/fd1cce80-09ef-11ec-9e4f-b9f3a906cadd)
![Screen Shot 2021-08-31 at 12 07 22 AM](https://media.git.generalassemb.ly/user/34950/files/fdb56500-09ef-11ec-8307-72e9fde28f32)

### User Story
- The user should be able to register and log in with a unique profile that retains their account information and listings.
- The user should be able to upload/edit/delete the listings they have created and also view the listings of others.
- Users should be able to view details about the product they are viewing, i.e size, description, brand, condition, price, etc. 
- (in the future) Users should be able to buy and sell from other users 
- (in the future) Users should be able to communicate with other users to negotiate price and ask questions about the products


### Future Plans for the site
- **Appropriate payment:** becuase this is a marketplace where listings are changing constantly and without the approval and direct supervision of an admin, the payment provider needed to be linked to the seller and the buyer, both parties would need to import their payment information upon profile creation and sell items indepentent from the website. What i mean by this is that the money transfer is between website users, not a user and the admin, which is typical fashion for 'ecommerce' websites but this is a marketplace of sorts. 
- **Communicaiton between users:** It is important that a buyer and seller can communicate whether that be price negotiations, trade inquiries, of general questions about the piece
- **Reviews:** This is something i intended to have in my MVP however redux occupied a large portion of my time since i had never even looked into it prior to this project. Reviews are important for legitimacy and peace of mind for buyers and sellers. 
- **Image upload:** This is something i am working on currently, at the moment it is not funcitonal.
