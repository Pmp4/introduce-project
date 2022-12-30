const draw = () => {
    const canvas = document.getElementById("canvas");
    console.log(canvas.getContext);
    if(canvas.getContext) {
        const ctx = canvas.getContext("2d");
        console.log(ctx);

        ctx.beginPath();
        // 캔버스 크기는 100x100이상이 되어야 재대로 나온다.
        ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = "blue";
    }
}

export default draw;