import dummyComp from "./components/dummy";
const homepage = () => {
    console.log("this is >>> Profile Page Header");
    dummyComp();
}
window.addEventListener('DOMContentLoaded', (event) => {
    homepage();
});


