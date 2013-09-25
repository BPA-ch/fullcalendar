
legend = [];

function addLegend(id, text) {
	if(typeof legend[id] === "undefined") {
		legend[id] = [];
	}
	legend[id][text] = text;
}

$("body").on("click", ".BPASLViewerLink", function(event){
		event.stopPropagation();

		var e = $(this);

		var wList = e.attr("data-list"),
			wRow = e.attr("data-row"),
			wView = e.attr("data-view"),
			wUrl = e.attr("data-url"),
			wRandom = e.attr("data-random"),
			wDetail = e.attr("data-detail"),
			wTitle = e.attr("data-title"),
			wId = e.attr("data-id");

		var source = $("#" + wId + "_Event");

	SLViewer(wList, wRow, wView, wUrl,
		wRandom, "", wDetail,
		wTitle, wId);
});
