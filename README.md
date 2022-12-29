# Iron Ore-Quality Prediction

TE Mini Project topic. 

**Summary:**<br>
We are trying to create a platform that will help customers who require a certain % purity of Iron to find Mining plants near them that provide the same.

<br>
"It comes as no surprise that iron ore is considered <b>the strength behind the world’s leading industries</b>. As an integral component in the formation of steel, iron ore is <b>the world’s most commonly used metal</b> and critical to nearly every industry, from energy and construction to transportation and equipment manufacturing."


---------------


# Website Idea

## Iron Ore Quality Predictor

To connect buyers and sellers of Iron Ore and offer high quality iron for their purposes.

## Frontend( React )

#### To install dependency

```
npm install
```

#### To start the server

```
npm start
```

#### For Production Build

```
npm run build
```

- I have used proxy `http://127.0.0.1` for axios in package.json
- You can set axios.defaults.baseURL = `https://api.example.com` Globally

## Backend( Django )

#### Installing

open terminal and type

```
git clone 
```
followed by the repo link.

#### Requirements

To install requirements type

```
pip install -r requirements.txt
```

`To use Github api put your credentials in settings.py`

```
GIT_CLIENT_ID = 'your github client id'
GIT_CLIENT_SECRET = 'your github client secret'
```

To migrate the database open terminal in project directory and type

```
python manage.py makemigrations
python manage.py migrate
```

To run the program in local server use the following command

```
python manage.py runserver
```

Server will be available at `http://127.0.0.1:8000` in your browser

Don't Forget to whitelist your host origin using `django-cors-header` when using in production<br>
[See Documentation](https://pypi.org/project/django-cors-headers/)

========Thank You !!!=========



---------------

<br>**Important Links:**<br>
Dataset: https://www.kaggle.com/datasets/edumagalhaes/quality-prediction-in-a-mining-process<br>
https://medium.com/swlh/what-if-eda-skipped-6f4e49798c06<br>
https://mineralsmakelife.org/blog/iron-ore-serves-as-the-backbone-to-nearly-every-industry/<br>
