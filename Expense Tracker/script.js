const expenseForm = document.getElementById('expenseform')
const expenseList = document.getElementById('expenseList')
const description = document.getElementById('description')
const category = document.getElementById('category')
const amount = document.getElementById('amount')


expenseForm.addEventListener('submit',(event)=>{
          event.preventDefault();
          
          if(description.value && category.value && !isNaN(amount.value)){
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${description.value}</td> 
            <td>${category.value}</td>
             <td>${amount.value}</td>`;

            
             expenseList.appendChild(newRow);
            description.value = "";
            category.value = "";
            amount.value = ""



          }else{
            alert("Please fill all details");
          }
          
})
