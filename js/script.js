


let activeItem = null;

function setAccordionHandlers(element){
	element.addEventListener("click", function(e) {
		  	let collapsed = element.getElementsByClassName("accordion-collapse")[0];
		  	let activeCollapsed;
		  	if(activeItem != null){
			  	activeCollapsed = activeItem.getElementsByClassName("accordion-collapse")[0];
			 }
			
		  	if(activeItem != element){
			  	element.classList.toggle("active");
			  	collapsed.style.maxHeight = collapsed.scrollHeight + "px";
			  	if(activeItem != null){
			  		console.log("activeItem isnt null");
			  		activeCollapsed.style.maxHeight = null;
		  			activeItem.classList.toggle("active");
			  	}
			  	activeItem = element;
			}else{
				element.classList.toggle("active");
				collapsed.style.maxHeight = null;
				activeItem = null;
			}
				console.log(activeItem);  	
		  });
}




let addItemButton = document.querySelector("#addAccordionItemButton");


function CreateItem(title, description){
	let item = document.createElement("div");
	item.classList.add("accordion-item");

	let header = document.createElement("div");
	header.classList.add("accordion-header");

	let titleElement = document.createElement("div");
	titleElement.classList.add("title");
	titleElement.innerText = title;

	let arrow = document.createElement("div");
	arrow.classList.add("arrow");

	let collapse = document.createElement("div");
	collapse.classList.add("accordion-collapse");

	let body = document.createElement("div");
	body.classList.add("accordion-body");
	body.innerText = description;

	header.appendChild(titleElement);
	header.appendChild(arrow);

	collapse.appendChild(body);
	item.appendChild(header);
	item.appendChild(collapse);

	return item;
}