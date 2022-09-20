import dummyComp from "./components/dummy";
const homepage = () => {
    console.log("this is >>> Notification Page");
    dummyComp();
}
window.addEventListener('DOMContentLoaded', (event) => {
    homepage();
});


