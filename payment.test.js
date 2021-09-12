describe("Payment calculations", function(){
    beforeEach(function(){
        billAmtInput.value=100;
        tipAmtInput.value=20;
    })

it("should not allow an empty input of bill or tip for createCurPayment()", function(){
    let billAmt="";
    let tipAmt="20";
    expect(createCurPayment()).toBe=("");
})

it("should create current payment for createCurPayment()", function(){
    let billAmt="100";
    let tipAmt="20";
    expect(billAmt).toBe("100");
    expect(tipAmt).toBe("20");
    expect(calculateTipPercent(billAmt, tipAmt)).toBe(20);
})

it("should creat payment table row at appendPaymentTable()", function(){
    
    let curPayment=createCurPayment();
    allPayments["payment1"]=curPayment;
    appendPaymentTable(curPayment);
    let createdTd=document.querySelectorAll("#paymentTable tbody tr td");
    expect(createdTd.length).toEqual(3);
    expect(createdTd[0].innerText).toEqual("$100");
    expect(createdTd[1].innerText).toEqual("$20");
    expect(createdTd[2].innerText).toEqual("20%");
})


it("should update summer section on updateSummary", function(){
    let createdSummaryTd=document.querySelectorAll("#summaryTable tbody tr td");
   
    updateSummary();
   expect(createdSummaryTd.length).toEqual(3);
   expect(createdSummaryTd[0].innerText).toEqual("$0");
   expect(createdSummaryTd[1].innerText).toEqual("$0");
   expect(createdSummaryTd[2].innerText).toEqual("0%");


})

afterEach(function(){
    billAmtInput.value="";
    tipAmtInput.value="";
    paymentTbody.innerHTML="";
    summaryTds[0].innerHTML="";
    summaryTds[1].innerHTML="";
    summaryTds[2].innerHTML="";
    serverTbody.innerHTML="";
    paymentID=0;
    allPayments={};

});

});