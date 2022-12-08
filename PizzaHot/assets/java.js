

function calculate(topF,totalToppingsF,totalF){
     $('.total').empty()
  $(".total").append( `<span class="bill-label">Total:</span>
                        <span class="bill-value" id="total-cost">${topF}</span>`)
   $('.extra-topping').empty()
  $(".extra-topping").append( `<span class="bill-label">Total:</span>
                        <span class="bill-value" id="total-cost">${totalToppingsF}</span>`)
      $('#grand-total').empty()
  $("#grand-total").append( `<span class="bill-label">Grand Total:</span>
                        <span class="bill-value" id="grand-cost">${totalF} TND</span>`)
}

 $(document).ready(function(){
    var extraCheese=0
    var totalToppings=0
    var top=20
    var total=0
    $("#c1").on("click ",function(){
 $ ("#mushroom").toggle(1000);

 top+=toppings[0].cost
  total+=top
 totalToppings+= toppings[0].cost


 calculate(top,totalToppings,total)
});

   $("#c2").on("click ",function(){
 $ ("#onion").toggle(1000);
 top+=toppings[1].cost
  total+=top
 totalToppings+= toppings[1].cost
 calculate(top,totalToppings,total)

})
      $("#c3").on("click ",function(){
 $ ("#paneer").toggle(1000);
 top+=toppings[2].cost
  total+=top
 totalToppings+= toppings[2].cost
 calculate(top,totalToppings,total)

})

    $("#c4").on("click ",function(){
 $ ("#paparika").toggle(1000);
 top+=toppings[3].cost
  total+=top
 totalToppings+= toppings[3].cost
 calculate(top,totalToppings,total)

})
       $("#c5").on("click ",function(){
 $ ("#jalapeno").toggle(1000);
 top+=toppings[4].cost
 total+=top
 totalToppings+= toppings[4].cost
 calculate(top,totalToppings,total)
 
})

   $("#c6").on("click ",function(){
 $ ("#green-olives").toggle(1000);
 top+=toppings[5].cost
  total+=top
 totalToppings+= toppings[5].cost
 calculate(top,totalToppings,total)

})

  $("#c7").on("click ",function(){
 $ ("#golden-corn").toggle(1000);
 top+=toppings[6].cost
  total+=top
 totalToppings+= toppings[6].cost
 calculate(top,totalToppings,total)
})

  $("#c8").on("click ",function(){
 $ ("#capsicum").toggle(1000);
 top+=toppings[7].cost
  total+=top
 totalToppings+= toppings[7].cost
 calculate(top,totalToppings,total)
})
   $("#c9").on("click ",function(){
 $ ("#peri-peri-chicken").toggle(1000);
 top+=toppings[8].cost
  total+=top
 totalToppings+= toppings[8].cost
 calculate(top,totalToppings,total)
})

     $("#c10").on("click ",function(){
 $ ("#barbeque").toggle(1000);
 top+=toppings[9].cost
  total+=top
 totalToppings+= toppings[9].cost
 calculate(top,totalToppings,total)

})

   $("#c11").on("click ",function(){
 $ ("#sausage").toggle(1000);
 top+=toppings[10].cost
  total+=top
 totalToppings+= toppings[10].cost
 calculate(top,totalToppings,total)

})
   $("#c12").on("click ",function(){
 $ ("#chicken-tikka").toggle(1000);
 top+=toppings[11].cost
  total+=top
 totalToppings+= toppings[11].cost
 console.log(top)
})
  $("#c13").on("click ",function(){
 $ ("#grilled-chicken-rasher").toggle(1000);
 top+=toppings[12].cost
  total+=top
 totalToppings+= toppings[12].cost
 calculate(top,totalToppings,total)

})
   $("#extra-cheese").on("click ",function(){
let isChecked = $('#extra-cheese')[0].checked
console.log(isChecked)
if(!isChecked){
    console.log("hi")
     total-=extraCheese
        extraCheese-=15

    $('.extra-cheese').empty()
  $(".extra-cheese").append( `<span class="bill-label">Extra Cheese:</span>
                        <span class="bill-value" id="cheese-cost">${extraCheese} TND </span>`)
     $('#grand-total').empty()
  $("#grand-total").append( `<span class="bill-label">Grand Total:</span>
                        <span class="bill-value" id="grand-cost">${total} TND</span>`)


  
}
if(isChecked){

    extraCheese+=15
     total+=extraCheese
    $('.extra-cheese').empty()
  $(".extra-cheese").append( `<span class="bill-label">Extra Cheese:</span>
                        <span class="bill-value" id="cheese-cost">${extraCheese} TND </span>`)
     $('#grand-total').empty()
  $("#grand-total").append( `<span class="bill-label">Grand Total:</span>
                        <span class="bill-value" id="grand-cost">${total} TND</span>`)
}

 }) 
 $("#quantity").on("click ",function(){


 var value=$("#quantity option:selected" ).val();
if(value)
 console.log(value)
 if(value){
       total*=value
     $('#grand-total').empty()
 
  $("#grand-total").append( `<span class="bill-label">Grand Total:</span>
                        <span class="bill-value" id="grand-cost">${total} TND</span>`)

 }



  // total+=top
 // totalToppings+= toppings[12].cost
 // calculate(top,totalToppings,total)

})



})

    



 $(document).ready(function(){
    $(".toppings-genre").on("click ",function(){
 $ (".toppings-body-non").toggle(1000);
  $ (".toppings-body-veg").toggle(1000);
});})


function loop(array){
    var arr=[]
    for (var i=0 ; i<array.length;i++){
        arr.push(array[i].cost)
        console.log(array[i].cost)
    }
   return arr

}





 var toppings=[
{
topping:'mushroom',cost:2
},

{
topping:'onion',cost:1
},
{topping:'paneer',cost:5
},

{
topping:'paparika',cost:2
},

{
topping:'jalapeno',cost:2
},

{
topping:'green-olives',cost:2
},

{
topping:'golden-corn',cost:3
},

{
topping:'capsicum',cost:2
},

{
topping:'peri-peri-chicken',cost:5
},

{
topping:'barbeque',cost:5
},

{
topping:'sausage',cost:3
},

{
topping:'chicken-tikka',cost:7
},

{
topping:'grilled-chicken-rasher',cost:7
}


    ];

 function addtocart(){
    alert("your orde has tiked by", $("#grand-cost").show() );
 }