describe("Help calculate payment info", function(){

    it("should calculate tip amt on calculateTipPercent()", function(){
        expect(calculateTipPercent(100,20)).toEqual(20);
    })
    
   it("should create a delete button when a server is created", function(){
        let deleteButton=document.createElement("tr");
        appendDeleteBtn(deleteButton);

        expect(deleteButton.children.length).toEqual(1);
        expect(deleteButton.firstChild.innerHTML).toEqual("X");
   })
    });