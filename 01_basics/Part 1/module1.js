var moduleVariable = 12

function moduleFunction (){
    console.log("Hello from module1");
}

// export { moduleFunction, moduleVariable}

export default { moduleFunction, moduleVariable }