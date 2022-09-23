# devq-mein-project

## Features

- **Register**: Der User kann sich einen Account erstellen und meldet sich damit automatisch an
- **Login**: Der User kann über eine Anmelde-Maske sich in seinen Account einloggen
- **Logout**: Der User kann sich aus seinem Account wieder ausloggen
- **Question erstellen**: Der User kann über ein Formular Title und Description (und Kategorie) angeben. Diese Question wird dann in der Datenbank gespeichert
- **Questions**: Es können Fragen erstellt werden. Diese werden auf dem Server mit mongodb gespeichert. Der User kann eine Liste von Fragen sehen. Er kann eine Detailansicht der Frage sehen wo mehr als nur der Titel enthalten ist
- **Answer**: Der User kann kann über ein Eingabeformular eine Antwort für eine Answer erstellen. Diese Antwort wird in der UI auf der Question-Page dargestellt und in der Datenbank gespeichert

### Optional Features - 1

- **Account-Update**: Der User kann seine persönlichen Daten ändern (Name & Avatar)
- **Kategorie-Filter**: Es gibt eine feste Liste von Kategorien. Der User kann diese Kategorien als Filter für die Question-Liste verwenden. Die Kategorie wird bei der Erstellung einer Question definiert

### Optional Features - 2

- **Pagination**: Die Liste der Fragen ist auf 5 Fragen begrenzt. Es gibt einen Button welcher die nächsten 5 Fragen nachladen kann
- **User-Question-List**: Der User kann im Account-Bereich eine Liste seiner eigenen Fragen sehen
- **User-Answer-List**: Der User kann im Account-Bereich eine Liste seiner Antworten (zu Fragen) sehen
- **Avatar**: Der User kann beim Erstellen des Accounts einen Avatar hochladen. dieser wird bei den Antworten des Users (Question-Page) dargestellt
- **Such-Funktion**: Der User kann nach einem Search-Term über die Question-Liste filtern

## Models

![Model-Relations](images/Model-Relations.png)

## Endpunkte

### GET /questions

liefert eine liste aller questions zurück

Response:

```javascript
[
  {
    id: "kj23föj23följö",
    title: "Was kann XY tun?",
    description: "...",
    user: {
      email: "my@mail.de",
      name: "Hans Müller",
    },
    answers: [
      {
        description: "...",
      },
    ],
  },
];
```

### GET /questions/[:id]

liefert uns eine einzelne Question zurück

Response:

```javascript
{
  id: "kj23föj23följö",
  title: "Was kann XY tun?",
  description: "...",
  user: {
    email: 'my@mail.de',
    name: 'Hans Müller'
  },
}
```

### POST /questions

erstellt eine neue question

Body:

```javascript
{
  title: "Was kann XY tun?",
  description: '...'
}
```

Response:

```javascript
{
  id: "kj23föj23följö",
  title: "Was kann XY tun?",
  description: "...",
  user: "adasdqwqqqf",
}
```

### POST /answers

erstellt eine antwort für eine question

Body:

```javascript
{
  description: "...",
  question: "kj23föj23följö",
}
```

Response:

```javascript
{
  id: "dfeljöfweöj",
  description: "...",
  user: "adasdqwqqqf",
  question: "kj23föj23följö",
}
```

### POST /user/login

logged user ein

Body:

```javascript
{
  email: "my@mail.de",
  password: "123456"
}
```

Response:

```javascript
{
  id: "adasdqwqqqf",
  email: "my.mail.de",
  name: "Hans Müller",
}
```

### POST /user/register

erstellt einen neuen user und loggt ihn ein

Body:

```javascript
{
  email: "my.mail.de",
  password: "123456",
  name: "Hans Müller"
}
```

Response:

```javascript
{
  id: "adasdqwqqqf",
  email: "my.mail.de",
  name: "Hans Müller",
}
```

### POST /user/logout

der usertoken cookie wird gelöscht. der token wird aus der datenbank entfernt

Body:

```javascript
{
}
```

Response:

```javascript
true;
```

### GET /user

gibt den aktuellen User zurück

Response:

```javascript
{
  id: "adasdqwqqqf",
  email: "my.mail.de",
  name: "Hans Müller",
}
```
