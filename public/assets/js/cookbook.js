const getCookbook = async () => {
    const response = await fetch("/cookbook");
    if (response.ok) {
    } else {
        alert("Please login!");
    }
}