const names = document.getElementById("name");
const TagsContainer = document.querySelector(".tags");

const AddName =() =>
{
   const tag = document.createElement("div");
   tag.setAttribute("class","tag");

   tag.innerText = `Hey, I am ${names.value}`;

   TagsContainer.append(tag);
}