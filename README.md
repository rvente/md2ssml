# md2ssml

Markdown to speech synthesis markup language using pandoc custom writer.

The program is free as in mattress. Use at your own joy. Or peril. But hopefully joy.



This is a fork of the wonderful starter.  https://github.com/developit/express-es6-rest-api 

## Hit it!

```json
{
    "markup" : "# hello world\n## numbered list example \n1. first item\n2. second item"
}
```

## Develop

You'll need to install pandoc on your machine. https://pandoc.org/installing.html That should be the hard part. 

```
cd src/
npm install

PORT=8080 npm run dev  # dev server
PORT=8080 npm start    # prod server
```

Now you can hit the endpoint at `http://localhost:8080/api/md2ssml`.

Try 

```
curl --location --request GET 'http://localhost:8080/api/md2ssml' \
--header 'Content-Type: application/json' \
--data-raw '{
    "markup" : "# hello world\n## numbered list example \n1. first item\n2. second item"
}'
```