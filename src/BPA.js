
legend = [];

function addLegend(id, text) {
	if(typeof legend[id] === "undefined") {
		legend[id] = [];
	}
	legend[id][text] = text;
}

var CalloutId = 0;

var addCallOutList = [];
var removeCallOutList = [];

function attachSLViewer(ListId, RowId, ViewTitle, Url, Random, Config, DetailPage, ItemTitle, Id)
{

	SLViewer(ListId, RowId, ViewTitle, Url, Random, Config, DetailPage, ItemTitle, Id);

	$("#" + Id).click();
}

function CreateCallouts() {

	var i = 0, 
		length = addCallOutList.length,
		element, source, id;


	for (i; i < length; i++) {
		element = addCallOutList[i];
		//id = element.Source+"_callout";
		//source = document.getElementById(element.Source);

		//if(source != null) {
			//SLViewer(element.ListId, element.RowID, element.ViewTitle, element.Url, element.Random, "", element.DetailPage, element.ItemTitle);
			//CreateCalendarCallout(element.List, element.Row, element.Title, element.Url, id, source);

			/*
SLViewer(\""+decode.ListId+"\", \""+decode.RowID+
							"\", \""+decode.ViewTitle+"\", \""+decode.Url+
							"\", \""+decode.Random+"\", \"\", " +
							"\""+decode.DetailPage+"\", \""+decode.ItemTitle+"\"); },0)
			*/
		//}
		
	}

	addCallOutList = [];
}

function removeCallouts() {
	var i = 0, 
		length = removeCallOutList.length,
		callout;


	for (i; i < length; i++) {
		/*callout = removeCallOutList[i];
		
		CalloutManager.remove(callout);*/
		
	}

	removeCallOutList = [];
}

function CreateCalendarCallout(ListId, RowId, ViewTitle, Url, Id, Source) {


/*var calloutLink = document.createElement("div");
            calloutLink.id = Random;
            /*calloutLink.onmouseover = function () { 
                curListUrl = this.id; 
            } */

/*calloutLink.innerHTML = "<div class=\"ms-commandLink\" style=\"text-align: left;font-size: 14px;\"><b>" + ViewTitle + "</b><br/><br/></div>";*/

/*var wUrl = Url + "/_layouts/15/bpa/layoutspagebase/BPAItemViewer.aspx?BTKList=" + ListId + "&BTKID=" + RowId + "&BTKView=" + ViewTitle;

$.ajax({
	url: wUrl,
	success: function(data) {
		var callout = CalloutManager.createNew({
		                launchPoint: Source,
		                beakOrientation: "leftRight",
		                ID: Id,
		                title: ViewTitle,
		                content: "<div class=\"ms-soften\" style=\"margin-top:13px;\">"
								+ "<hr/></div>"
								+ "<div class=\"callout-section\" style=\"margin-top:13px;\">" + data + "</div>",
		            });
		removeCallOutList.push(callout);
	},
	cache: false
})*/
//var _announBody = "test";

//Source.append(calloutLink);

/*return CalloutManager.createNew({
                launchPoint: Source,
                beakOrientation: "leftRight",
                ID: Id,
                title: ViewTitle,
                content: "<div class=\"ms-soften\" style=\"margin-top:13px;\">"
						+ "<hr/></div>"
						+ "<div class=\"callout-section\" style=\"margin-top:13px;\">" + _announBody + "</div>",
            });*/

//callout.


}

/*$(document).on("click", ".CalendarCallout", function() {
	var list = $(this).attr('data-list');
	var row = $(this).attr('data-row');
	var title = $(this).attr('data-title');
	var url = $(this).attr('data-url');

	CalendarCallout(list, row, title, url, Math.random(), this);
});
*/
