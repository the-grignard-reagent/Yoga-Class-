
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

