//Gauge Chart
// Unpack data (wfreq)
function unpackWreq(data, idSelected){
    var selected = data.metadata.filter(x=>x.id === idSelected);
    var wfreq = selected[0].wfreq;

    return wfreq;
};

// Init Gauge plot
function initGauge(){
    d3.json("../data/samples.json").then(function(data){
        var selectedWfreq = unpackWreq(data,940);
    data3 = [{
        type:"category",
        value:selectedWfreq,
        gauge:
    }]
    })

}
d3.selectAll("#selDataset").on("change",updateGauge);

function updateGauge(){

}