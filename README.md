# Technologies

1. Frontend- HTML, CSS, React, Bootstrap, JavaScript
2. Express, Node
3. Database: MySQL


# Requirement

1. Only individuals aged 18-65 can enroll.
2. Monthly fees: INR 500.
3. Participants can move to any other batch only from next month.
4. Validation of User's age.
5. Payment functionality, function CompletePayment() to make an imaginary call to a REST Api

# Setup Instructions

1. Clone repository
https://github.com/the-grignard-reagent/Yoga-Class-.git

2. Install yarn(optional)/Initiate npm packages

3. cd my-app

4. Run project using 'npm start'/ 'yarn run' command.



# Project Outline

 ![Screenshot from 2023-12-20 03-16-05](https://github.com/the-grignard-reagent/Yoga-Class-/assets/76035351/b70527b7-0181-4111-99ef-3c21af0f5b31)


# Project Overview

![Screenshot from 2023-12-19 21-22-48](https://github.com/the-grignard-reagent/Yoga-Class-/assets/76035351/c7dd8b9b-1c62-4c59-82a8-ba520012a42c)

![Screenshot from 2023-12-19 21-22-48](https://github.com/the-grignard-reagent/Yoga-Class-/assets/76035351/8d99f75b-d1fe-428e-98b3-ecd2ea1dc67d)


# Improvements


1. Cloud Architecture could have been implemented.
2. OAuth can be implemented.
3. Payment feature could be added.
4. Solution could be containerized.
5. Important Info could be protected inside a ".env" variable.

# Thanks
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

