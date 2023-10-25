import { Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";

const app = new Hono();

app.get("/", (c) => {
  const source = `
<!DOCTYPE html>
<html>
<head>
    <!-- ... -->
</head>
<body>
    <h1>今日の天気</h1>
    <ul>
        <li><span id="city">Tokyo</span><span id="weather">晴れ</span></li>
        <li><span id="city">Osaka</span><span id="weather">雨</span></li>
        <li><span id="city">Nagoya</span><span id="weather">曇り</span></li>
    </ul>
</body>
</html>
  `
});

Deno.serve(app.fetch);
