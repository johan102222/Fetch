fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => ShowList(json));

function ShowList(json) {
  let content = "";
  console.log(json);
  json.forEach((json) =>  {
    content += `
    <div class="LISTEN">
    <p>Pengguna : ${json.id}</p>
    <p>Comment : ${json.title}</p>
    </div>
    `;
  });
  document.getElementById("datanya").innerHTML = content;
}
