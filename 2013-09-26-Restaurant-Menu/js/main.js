var menu = {};
menu.sections = {};
menu.total_calories = 0;
menu.number_of_sections = parseInt(prompt("How many sections would you like to add?"));

for(var i = 0; i < menu.number_of_sections; i++)
{
  var section_name = prompt("Name of section:");
  menu.sections[section_name] = [];
}

var response = prompt("Menu section or blank to exit:");
while(response)
{
  var item = {};
  item.name = prompt("Name?");
  item.calories = parseInt(prompt("Calories?"));
  item.cost = parseFloat(prompt("Cost?"));
  item.ingredients = prompt("Ingredients?").split(", ");
  menu.sections[response].push(item);

  response = prompt("Menu section or blank to exit:");
}

var section_list = Object.getOwnPropertyNames(menu.sections);
for(i = 0; i < section_list.length; i++)
  for(var j = 0; j < menu.sections[section_list[i]].length; j++)
    menu.total_calories += menu.sections[sections_list[i]][j].calories;

  debugger;