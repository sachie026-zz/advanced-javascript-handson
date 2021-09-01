var val = 10;
const obj = {
    val: 20,
    callMe() {
        console.log('this', this);
    },
    callWithArrowFunc: () => {
        console.log('this', this);
    }
}


obj.callMe();
obj.callWithArrowFunc();