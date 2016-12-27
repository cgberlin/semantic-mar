var nav_QuickSiteMain = new Object();

nav_QuickSiteMain.underline="false";
nav_QuickSiteMain.justification="center";
nav_QuickSiteMain.textFont="Arial";
nav_QuickSiteMain.selectedUnderline="false";
nav_QuickSiteMain.accentStyle="Arrow";
nav_QuickSiteMain.funButton="Arts_and_Crafts";
nav_QuickSiteMain.mouseoverBgcolor="";
nav_QuickSiteMain.mouseoverBold="true";
nav_QuickSiteMain.buttonCategory="basic";
nav_QuickSiteMain.darkButton="Basic_Black";
nav_QuickSiteMain.italic="false";
nav_QuickSiteMain.importedImageMouseOver="files\/QuickSiteImages\/nav_selected.jpg";
nav_QuickSiteMain.textSize="9";
nav_QuickSiteMain.tabCategory="basic";
nav_QuickSiteMain.style="imported";
nav_QuickSiteMain.selectedTextcolor="#FFFFFF";
nav_QuickSiteMain.graphicSelected="true";
nav_QuickSiteMain.selectedBgcolor="";
nav_QuickSiteMain.accentColor="Black";
nav_QuickSiteMain.hasLinks="true";
nav_QuickSiteMain.basicButton="Gray";
nav_QuickSiteMain.accentType="none";
nav_QuickSiteMain.graphicMouseover="true";
nav_QuickSiteMain.horizontalSpacing="5";
nav_QuickSiteMain.lineWidth="1";
nav_QuickSiteMain.selectedEffect="true";
nav_QuickSiteMain.lineColor="#F490F3";
nav_QuickSiteMain.modernButton="Basic_Black";
nav_QuickSiteMain.border="";
nav_QuickSiteMain.simpleButton="Autumn_Leaves";
nav_QuickSiteMain.type="Navigation";
nav_QuickSiteMain.bold="true";
nav_QuickSiteMain.sophisticatedButton="Antique";
nav_QuickSiteMain.localPreview="false";
nav_QuickSiteMain.verticalSpacing="0";
nav_QuickSiteMain.selectedBold="true";
nav_QuickSiteMain.basicTab="White";
nav_QuickSiteMain.mouseoverEffect="true";
nav_QuickSiteMain.navID="nav_QuickSiteMain";
nav_QuickSiteMain.mouseoverTextcolor="#FFFFFF";
nav_QuickSiteMain.imageHeight="27";
nav_QuickSiteMain.mouseoverUnderline="false";
nav_QuickSiteMain.texturedButton="Brick";
nav_QuickSiteMain.selectedItalic="false";
nav_QuickSiteMain.brightButton="Chicky";
nav_QuickSiteMain.importedImageSelected="files\/QuickSiteImages\/nav_selected.jpg";
nav_QuickSiteMain.dirty="false";
nav_QuickSiteMain.squareTab="Camel";
nav_QuickSiteMain.horizontalWrap="4";
nav_QuickSiteMain.numLinks="30";
nav_QuickSiteMain.imageWidth="101";
nav_QuickSiteMain.mouseoverItalic="false";
nav_QuickSiteMain.importedImage="files\/QuickSiteImages\/nav_normal.jpg";
nav_QuickSiteMain.background="";
nav_QuickSiteMain.shinyButton="Shiny_Aqua";
nav_QuickSiteMain.version="5";
nav_QuickSiteMain.orientation="horizontal";
nav_QuickSiteMain.textColor="#999999";
nav_QuickSiteMain.holidayButton="Christmas_Ornaments";
nav_QuickSiteMain.width="419";
nav_QuickSiteMain.height="223";

nav_QuickSiteMain.navName = "QuickSiteMain";
nav_QuickSiteMain.imagePath = strRelativePathToRoot + "files/QuickSiteImages/nav_normal.jpg";
nav_QuickSiteMain.selectedImagePath = strRelativePathToRoot + "files/QuickSiteImages/nav_selected.jpg";
nav_QuickSiteMain.mouseOverImagePath = strRelativePathToRoot + "files/QuickSiteImages/nav_selected.jpg";
nav_QuickSiteMain.imageWidth = "101";
nav_QuickSiteMain.imageHeight = "27";
nav_QuickSiteMain.fontClass = "size9 Arial9";
nav_QuickSiteMain.fontFace = "Arial, Helvetica, sans-serif";


var baseHref = '';
// this will only work if getElementsByTagName works
if (document.getElementsByTagName)
{
    // this will only work if we can find a base tag
    var base = document.getElementsByTagName('base');
    // Verify that the base object exists
    if (base && base.length > 0)
    {
        // if you don't specify a base href, href comes back as undefined
        if (base[0].href != undefined)
        {
            // get the base href
            baseHref = base[0].href;
            // add a trailing slash if base href doesn't already have one
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '/')
            {
                baseHref += '/';
            }
        }
    }
}


nav_QuickSiteMain.links=new Array(30);
var nav_QuickSiteMain_Link1 = new Object();
nav_QuickSiteMain_Link1.type = "existing";
nav_QuickSiteMain_Link1.displayName = "HOME";
nav_QuickSiteMain_Link1.linkWindow = "_self";
nav_QuickSiteMain_Link1.linkValue = "index.html";
nav_QuickSiteMain_Link1.linkIndex = "1";
nav_QuickSiteMain.links[0] = nav_QuickSiteMain_Link1;
var nav_QuickSiteMain_Link2 = new Object();
nav_QuickSiteMain_Link2.type = "existing";
nav_QuickSiteMain_Link2.displayName = "ABOUT US";
nav_QuickSiteMain_Link2.linkWindow = "_self";
nav_QuickSiteMain_Link2.linkValue = "about.html";
nav_QuickSiteMain_Link2.linkIndex = "2";
nav_QuickSiteMain.links[1] = nav_QuickSiteMain_Link2;
var nav_QuickSiteMain_Link3 = new Object();
nav_QuickSiteMain_Link3.type = "existing";
nav_QuickSiteMain_Link3.displayName = "CONTACT";
nav_QuickSiteMain_Link3.linkWindow = "_self";
nav_QuickSiteMain_Link3.linkValue = "contact.html";
nav_QuickSiteMain_Link3.linkIndex = "3";
nav_QuickSiteMain.links[2] = nav_QuickSiteMain_Link3;
var nav_QuickSiteMain_Link4 = new Object();
nav_QuickSiteMain_Link4.type = "existing";
nav_QuickSiteMain_Link4.displayName = "2013 PENDANTS";
nav_QuickSiteMain_Link4.linkWindow = "_self";
nav_QuickSiteMain_Link4.linkValue = "NEW-PENDANTS-2013.html";
nav_QuickSiteMain_Link4.linkIndex = "4";
nav_QuickSiteMain.links[3] = nav_QuickSiteMain_Link4;
var nav_QuickSiteMain_Link5 = new Object();
nav_QuickSiteMain_Link5.type = "existing";
nav_QuickSiteMain_Link5.displayName = "2013 EARRINGS";
nav_QuickSiteMain_Link5.linkWindow = "_self";
nav_QuickSiteMain_Link5.linkValue = "NEW_EARRINGS_2013.html";
nav_QuickSiteMain_Link5.linkIndex = "5";
nav_QuickSiteMain.links[4] = nav_QuickSiteMain_Link5;
var nav_QuickSiteMain_Link6 = new Object();
nav_QuickSiteMain_Link6.type = "existing";
nav_QuickSiteMain_Link6.displayName = "2012 PENDANTS";
nav_QuickSiteMain_Link6.linkWindow = "_self";
nav_QuickSiteMain_Link6.linkValue = "NEW-PENDANTS-2012.html";
nav_QuickSiteMain_Link6.linkIndex = "6";
nav_QuickSiteMain.links[5] = nav_QuickSiteMain_Link6;
var nav_QuickSiteMain_Link7 = new Object();
nav_QuickSiteMain_Link7.type = "existing";
nav_QuickSiteMain_Link7.displayName = "2012 EARRINGS";
nav_QuickSiteMain_Link7.linkWindow = "_self";
nav_QuickSiteMain_Link7.linkValue = "NEW-EARRINGS-2012.html";
nav_QuickSiteMain_Link7.linkIndex = "7";
nav_QuickSiteMain.links[6] = nav_QuickSiteMain_Link7;
var nav_QuickSiteMain_Link8 = new Object();
nav_QuickSiteMain_Link8.type = "existing";
nav_QuickSiteMain_Link8.displayName = "Collection 1";
nav_QuickSiteMain_Link8.linkWindow = "_self";
nav_QuickSiteMain_Link8.linkValue = "Collection-1.html";
nav_QuickSiteMain_Link8.linkIndex = "8";
nav_QuickSiteMain.links[7] = nav_QuickSiteMain_Link8;
var nav_QuickSiteMain_Link9 = new Object();
nav_QuickSiteMain_Link9.type = "existing";
nav_QuickSiteMain_Link9.displayName = "Collection 2";
nav_QuickSiteMain_Link9.linkWindow = "_self";
nav_QuickSiteMain_Link9.linkValue = "Collection-2.html";
nav_QuickSiteMain_Link9.linkIndex = "9";
nav_QuickSiteMain.links[8] = nav_QuickSiteMain_Link9;
var nav_QuickSiteMain_Link10 = new Object();
nav_QuickSiteMain_Link10.type = "existing";
nav_QuickSiteMain_Link10.displayName = "Collection 3";
nav_QuickSiteMain_Link10.linkWindow = "_self";
nav_QuickSiteMain_Link10.linkValue = "Collection-3.html";
nav_QuickSiteMain_Link10.linkIndex = "10";
nav_QuickSiteMain.links[9] = nav_QuickSiteMain_Link10;
var nav_QuickSiteMain_Link11 = new Object();
nav_QuickSiteMain_Link11.type = "existing";
nav_QuickSiteMain_Link11.displayName = "Collection 4";
nav_QuickSiteMain_Link11.linkWindow = "_self";
nav_QuickSiteMain_Link11.linkValue = "Collection-4.html";
nav_QuickSiteMain_Link11.linkIndex = "11";
nav_QuickSiteMain.links[10] = nav_QuickSiteMain_Link11;
var nav_QuickSiteMain_Link12 = new Object();
nav_QuickSiteMain_Link12.type = "existing";
nav_QuickSiteMain_Link12.displayName = "Collection 5";
nav_QuickSiteMain_Link12.linkWindow = "_self";
nav_QuickSiteMain_Link12.linkValue = "Collection-5.html";
nav_QuickSiteMain_Link12.linkIndex = "12";
nav_QuickSiteMain.links[11] = nav_QuickSiteMain_Link12;
var nav_QuickSiteMain_Link13 = new Object();
nav_QuickSiteMain_Link13.type = "existing";
nav_QuickSiteMain_Link13.displayName = "Collection 6";
nav_QuickSiteMain_Link13.linkWindow = "_self";
nav_QuickSiteMain_Link13.linkValue = "Collection-6.html";
nav_QuickSiteMain_Link13.linkIndex = "13";
nav_QuickSiteMain.links[12] = nav_QuickSiteMain_Link13;
var nav_QuickSiteMain_Link14 = new Object();
nav_QuickSiteMain_Link14.type = "existing";
nav_QuickSiteMain_Link14.displayName = "Collection 7";
nav_QuickSiteMain_Link14.linkWindow = "_self";
nav_QuickSiteMain_Link14.linkValue = "Collection-7.html";
nav_QuickSiteMain_Link14.linkIndex = "14";
nav_QuickSiteMain.links[13] = nav_QuickSiteMain_Link14;
var nav_QuickSiteMain_Link15 = new Object();
nav_QuickSiteMain_Link15.type = "existing";
nav_QuickSiteMain_Link15.displayName = "Collection 8";
nav_QuickSiteMain_Link15.linkWindow = "_self";
nav_QuickSiteMain_Link15.linkValue = "Collection-8.html";
nav_QuickSiteMain_Link15.linkIndex = "15";
nav_QuickSiteMain.links[14] = nav_QuickSiteMain_Link15;
var nav_QuickSiteMain_Link16 = new Object();
nav_QuickSiteMain_Link16.type = "existing";
nav_QuickSiteMain_Link16.displayName = "Collection 9";
nav_QuickSiteMain_Link16.linkWindow = "_self";
nav_QuickSiteMain_Link16.linkValue = "Collection-9.html";
nav_QuickSiteMain_Link16.linkIndex = "16";
nav_QuickSiteMain.links[15] = nav_QuickSiteMain_Link16;
var nav_QuickSiteMain_Link17 = new Object();
nav_QuickSiteMain_Link17.type = "existing";
nav_QuickSiteMain_Link17.displayName = "Earrings 1";
nav_QuickSiteMain_Link17.linkWindow = "_self";
nav_QuickSiteMain_Link17.linkValue = "Earrings-1.html";
nav_QuickSiteMain_Link17.linkIndex = "17";
nav_QuickSiteMain.links[16] = nav_QuickSiteMain_Link17;
var nav_QuickSiteMain_Link18 = new Object();
nav_QuickSiteMain_Link18.type = "existing";
nav_QuickSiteMain_Link18.displayName = "Earrings 2";
nav_QuickSiteMain_Link18.linkWindow = "_self";
nav_QuickSiteMain_Link18.linkValue = "Earrings-2.html";
nav_QuickSiteMain_Link18.linkIndex = "18";
nav_QuickSiteMain.links[17] = nav_QuickSiteMain_Link18;
var nav_QuickSiteMain_Link19 = new Object();
nav_QuickSiteMain_Link19.type = "existing";
nav_QuickSiteMain_Link19.displayName = "Earrings 3";
nav_QuickSiteMain_Link19.linkWindow = "_self";
nav_QuickSiteMain_Link19.linkValue = "Earrings-3.html";
nav_QuickSiteMain_Link19.linkIndex = "19";
nav_QuickSiteMain.links[18] = nav_QuickSiteMain_Link19;
var nav_QuickSiteMain_Link20 = new Object();
nav_QuickSiteMain_Link20.type = "existing";
nav_QuickSiteMain_Link20.displayName = "Earrings 4";
nav_QuickSiteMain_Link20.linkWindow = "_self";
nav_QuickSiteMain_Link20.linkValue = "Earrings-4.html";
nav_QuickSiteMain_Link20.linkIndex = "20";
nav_QuickSiteMain.links[19] = nav_QuickSiteMain_Link20;
var nav_QuickSiteMain_Link21 = new Object();
nav_QuickSiteMain_Link21.type = "existing";
nav_QuickSiteMain_Link21.displayName = "Earrings 5";
nav_QuickSiteMain_Link21.linkWindow = "_self";
nav_QuickSiteMain_Link21.linkValue = "Earrings-5.html";
nav_QuickSiteMain_Link21.linkIndex = "21";
nav_QuickSiteMain.links[20] = nav_QuickSiteMain_Link21;
var nav_QuickSiteMain_Link22 = new Object();
nav_QuickSiteMain_Link22.type = "existing";
nav_QuickSiteMain_Link22.displayName = "Earrings 6";
nav_QuickSiteMain_Link22.linkWindow = "_self";
nav_QuickSiteMain_Link22.linkValue = "Earrings-6.html";
nav_QuickSiteMain_Link22.linkIndex = "22";
nav_QuickSiteMain.links[21] = nav_QuickSiteMain_Link22;
var nav_QuickSiteMain_Link23 = new Object();
nav_QuickSiteMain_Link23.type = "existing";
nav_QuickSiteMain_Link23.displayName = "Earrings 7";
nav_QuickSiteMain_Link23.linkWindow = "_self";
nav_QuickSiteMain_Link23.linkValue = "Seaglass-Earrings-1.html";
nav_QuickSiteMain_Link23.linkIndex = "23";
nav_QuickSiteMain.links[22] = nav_QuickSiteMain_Link23;
var nav_QuickSiteMain_Link24 = new Object();
nav_QuickSiteMain_Link24.type = "existing";
nav_QuickSiteMain_Link24.displayName = "Earrings 8";
nav_QuickSiteMain_Link24.linkWindow = "_self";
nav_QuickSiteMain_Link24.linkValue = "Seaglass-Earrings-2.html";
nav_QuickSiteMain_Link24.linkIndex = "24";
nav_QuickSiteMain.links[23] = nav_QuickSiteMain_Link24;
var nav_QuickSiteMain_Link25 = new Object();
nav_QuickSiteMain_Link25.type = "existing";
nav_QuickSiteMain_Link25.displayName = "Pendants 1";
nav_QuickSiteMain_Link25.linkWindow = "_self";
nav_QuickSiteMain_Link25.linkValue = "Pendants-1.html";
nav_QuickSiteMain_Link25.linkIndex = "25";
nav_QuickSiteMain.links[24] = nav_QuickSiteMain_Link25;
var nav_QuickSiteMain_Link26 = new Object();
nav_QuickSiteMain_Link26.type = "existing";
nav_QuickSiteMain_Link26.displayName = "Pendants 2";
nav_QuickSiteMain_Link26.linkWindow = "_self";
nav_QuickSiteMain_Link26.linkValue = "Pendants-2.html";
nav_QuickSiteMain_Link26.linkIndex = "26";
nav_QuickSiteMain.links[25] = nav_QuickSiteMain_Link26;
var nav_QuickSiteMain_Link27 = new Object();
nav_QuickSiteMain_Link27.type = "existing";
nav_QuickSiteMain_Link27.displayName = "Pendants 3";
nav_QuickSiteMain_Link27.linkWindow = "_self";
nav_QuickSiteMain_Link27.linkValue = "Seaglass-Pendants-1.html";
nav_QuickSiteMain_Link27.linkIndex = "27";
nav_QuickSiteMain.links[26] = nav_QuickSiteMain_Link27;
var nav_QuickSiteMain_Link28 = new Object();
nav_QuickSiteMain_Link28.type = "existing";
nav_QuickSiteMain_Link28.displayName = "Pendants 4";
nav_QuickSiteMain_Link28.linkWindow = "_self";
nav_QuickSiteMain_Link28.linkValue = "Seaglass-Pendants-2.html";
nav_QuickSiteMain_Link28.linkIndex = "28";
nav_QuickSiteMain.links[27] = nav_QuickSiteMain_Link28;
var nav_QuickSiteMain_Link29 = new Object();
nav_QuickSiteMain_Link29.type = "existing";
nav_QuickSiteMain_Link29.displayName = "Pins";
nav_QuickSiteMain_Link29.linkWindow = "_self";
nav_QuickSiteMain_Link29.linkValue = "Pins-1.html";
nav_QuickSiteMain_Link29.linkIndex = "29";
nav_QuickSiteMain.links[28] = nav_QuickSiteMain_Link29;
var nav_QuickSiteMain_Link30 = new Object();
nav_QuickSiteMain_Link30.type = "existing";
nav_QuickSiteMain_Link30.displayName = "Collection-4B";
nav_QuickSiteMain_Link30.linkWindow = "_self";
nav_QuickSiteMain_Link30.linkValue = "Collection-4B.html";
nav_QuickSiteMain_Link30.linkIndex = "30";
nav_QuickSiteMain.links[29] = nav_QuickSiteMain_Link30;
function mouseOn(tdElement, newBackgroundImage)
{
	if(tdElement != null) {
		tdElement.style.backgroundImage = 'url(' + escapeScript(newBackgroundImage) + ')';
	}
}

function mouseOff(tdElement, newBackgroundImage)
{
	if(tdElement != null) {
		tdElement.style.backgroundImage = 'url(' + escapeScript(newBackgroundImage) + ')';
	}
}

function doMouseChange(Navigation,tdElement,linkIndex,bisMouseOver) {
	if (Navigation.mouseoverEffect != 'true') {
		return;
	}
	var link = Navigation.links[linkIndex-1];
	var bIsCurrentPage = isCurrentPage(link);
	if ((Navigation.graphicSelected == 'true' || Navigation.selectedTextcolor)
			&& bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		return;
	}
	
	var fontElement = getLinkFontElement(tdElement);
	
	if(fontElement != null) {
		doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver);
	}
	
	if (Navigation.graphicMouseover == 'true') {
		if (bisMouseOver) {
			mouseOn(tdElement,escapeHtmlInlineScript(Navigation.mouseOverImagePath));
		} else {
			mouseOff(tdElement, escapeHtmlInlineScript(Navigation.imagePath));
		}
	}
}
function addStyle(Navigation, Link,tdElement) {
	if(tdElement == null) {
		return;
	}
	var strImg = Navigation.imagePath;
	var strFontColor = Navigation.textColor;
	if ('true' == Navigation.selectedEffect) {
		if (Navigation.graphicSelected == 'true') {
			strImg = Navigation.selectedImagePath;
		}
		if (Navigation.selectedTextcolor) {
			strFontColor = Navigation.selectedTextcolor;
		}
	}
	var strImgUrl = "url('"+escapeHtmlInlineScript(strImg)+"')";
	tdElement.style.backgroundImage=strImgUrl;
	var fontElement = getLinkFontElement(tdElement);
	if (fontElement != null) {
		fontElement.style.color = strFontColor;
		if ('true' == Navigation.selectedEffect) {
			if ('true' == Navigation.selectedBold) {
				fontElement.style.fontWeight = "bold";
			}
			if ('true' == Navigation.selectedItalic) {
				fontElement.style.fontStyle = "italic";
			}
			if ('true' == Navigation.selectedUnderline) {
				fontElement.style.textDecoration = "underline";
			}
		}
	}
}
// Combined escape html and javascript
function escapeHtmlInlineScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	return htmlEncode(escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes));
}

function htmlEncode(s){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '<':
			result += "&lt;";
			break;
		case '>':
			result += "&gt;";
			break;
		case '&':
			result += "&amp;";
			break;
		case '"':
			result += "&quot;";
			break;
		case "'":
			result += "&#39;";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

/* escapes slashes and quotes. the default is to escape quotes,
 * but this can be turned off.
 * this function is used for javascript and also for escaping urls
 * within background-image css.	 
 */
function escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '\'':
			if (escapeSingleQuotes == null || escapeSingleQuotes)
				result += "\\\'";
			break;
		case '\"':
			if (escapeDoubleQuotes == null || escapeDoubleQuotes)
				result += "\\\"";
			break;
		case '\\':
			result += "\\\\";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

//
// This .js file includes utility functions used by both graphical and text navs
// in their rendering.  User pages including a nav element will import this file, along
// with TextNavigation.js and GraphicNavigation.js.  The functions within will
// be called by the [navname].js file generated at publish time.

function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;
	}
}

function isCurrentPage(Link)
{
	if(Link.type!='existing')
	{
		return false;
	}
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);
}

function toggleOnMouseChange(fontElement,newColor, bold, underline, italic)
{
	if(fontElement == null) {
		return;
	}
	if(newColor)
	{
		fontElement.style.color=newColor;
	}
	fontElement.style.fontWeight = (bold=='true' ? 'bold' : 'normal');
	fontElement.style.textDecoration = (underline=='true' ? 'underline' : 'none');
	fontElement.style.fontStyle = (italic=='true' ? 'italic' : 'normal');

}

function doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver) {
	if(fontElement == null) {
		return;
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor
						: Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	} else {
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor
				: Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	
	if(bisMouseOver) {
		toggleOnMouseChange(fontElement,textColor,bold,underline,italic);
	} else {
		toggleOnMouseChange(fontElement,baseTextColor,baseBold,baseUnderline,baseItalic);
	}
	

}

function addMouseAndStyleSupportQuickSiteMain(Navigation,navTbId) {
	var startNode;

	if(typeof(nav_element_id) != 'undefined' && document.getElementById(nav_element_id) != null) {
		startNode = document.getElementById(nav_element_id);
			
	} else if(navTbId != null) {
		startNode = document.getElementById(navTbId);
			
	}
	
	if(startNode != null) {
	  searchForCurrentPageTd(Navigation,startNode);
	}
	

}

function searchForCurrentPageTd(Navigation,startNode) {
	
	if(startNode.childNodes != null) {
		for(var i=0;i<startNode.childNodes.length;i++){
			if(addStyleForCurrentPageTd(Navigation,startNode.childNodes[i])){
			   return;	
			} else {
			   searchForCurrentPageTd(Navigation,startNode.childNodes[i]);
			}
		}
	}

}

function addStyleForCurrentPageTd(Navigation,currentNode) {
	if(Navigation.orientation == 'horizontal') {
		if(currentNode.tagName == 'TD' && currentNode.id != '' && currentNode.id.indexOf(Navigation.navName+navTDLinkPart) != -1){
			var currentTDIdPrefix = Navigation.navName+navTDLinkPart;
			var linkId = currentNode.id.substring(currentTDIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true) {
				addStyle(Navigation, Navigation.links[linkId-1],currentNode);
				return true;
			}
		}
	} else {
		if(currentNode.tagName == 'TR' && currentNode.id != '' && currentNode.id.indexOf(navTRLinkPrefix) != -1){	
			var currentTRIdPrefix = navTRLinkPrefix+Navigation.navName;
			var linkId = currentNode.id.substring(currentTRIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true && currentNode.childNodes != null) {
				var currentPageTd;
				for(var i=0;currentNode.childNodes.length;i++) {
					if(typeof(currentNode.childNodes[i].tagName) != 'undefined' && currentNode.childNodes[i].tagName == 'TD' && currentNode.childNodes[i].id.indexOf(Navigation.navName+navTDLinkPart) != -1) {
						currentPageTd = currentNode.childNodes[i];
						addStyle(Navigation, Navigation.links[linkId - 1],currentPageTd,currentNode);
						return true;
					}
				}
			}
		}
	}
	return false;
}

function getChildElementFromTree(startNode,nodesToTraverse) {
	var currentChildNode = startNode;
	
	for(var n= 0;n<nodesToTraverse.length;n++) {
		currentChildNode = getMatchingChildByTag(currentChildNode.childNodes,nodesToTraverse[n]);
	}
	
	return currentChildNode;
}


function getMatchingChildByTag(childNodes,tagName) {
	var child;
	for(var i=0;childNodes.length;i++) {
		if(childNodes[i].tagName == tagName) {
			child = childNodes[i];
			break;
		}
	}
	return child;
}
function getLinkFontElement(tdElement){
	var fontElement;
	var aElement = getChildElementFromTree(tdElement,['A']);
	for(var i=0;i < aElement.childNodes.length;i++) {
		if(aElement.childNodes[i].tagName == 'DIV') {
		 	fontElement = getChildElementFromTree(aElement.childNodes[i],['FONT']);
		 	break;
		} else if(aElement.childNodes[i].tagName == 'FONT'){
		 	fontElement = 	aElement.childNodes[i];
		 	break;
		}
	
	}
	return fontElement;
}



	if(typeof(navTRLinkPrefix) == 'undefined') {
		navTRLinkPrefix = 'vNavTR_Link_';
	}
	if(typeof(navTDLinkPart) == 'undefined') {
		navTDLinkPart = '_Link';
	}
	if(document.getElementById('nav_version') == null) {
	if (typeof(navTBSuffix) == 'undefined') {
	navTBSuffix = 0;
	} else {navTBSuffix++;}
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link1\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'1\',false);\"><A HREF=\"\/index.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"HOME\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f1\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">HOME<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link2\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'2\',false);\"><A HREF=\"\/about.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"ABOUT US\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f2\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">ABOUT&nbsp;US<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link3\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'3\',false);\"><A HREF=\"\/contact.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"CONTACT\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f3\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">CONTACT<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link4\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'4\',false);\"><A HREF=\"\/NEW-PENDANTS-2013.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2013 PENDANTS\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f4\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">2013&nbsp;PENDANTS<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"0\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link5\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'5\',false);\"><A HREF=\"\/NEW_EARRINGS_2013.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2013 EARRINGS\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f5\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">2013&nbsp;EARRINGS<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link6\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'6\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'6\',false);\"><A HREF=\"\/NEW-PENDANTS-2012.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2012 PENDANTS\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f6\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">2012&nbsp;PENDANTS<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link7\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'7\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'7\',false);\"><A HREF=\"\/NEW-EARRINGS-2012.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"2012 EARRINGS\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f7\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">2012&nbsp;EARRINGS<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link8\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'8\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'8\',false);\"><A HREF=\"\/Collection-1.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 1\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f8\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;1<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"0\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link9\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'9\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'9\',false);\"><A HREF=\"\/Collection-2.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 2\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f9\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;2<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link10\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'10\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'10\',false);\"><A HREF=\"\/Collection-3.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 3\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f10\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;3<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link11\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'11\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'11\',false);\"><A HREF=\"\/Collection-4.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 4\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f11\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;4<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link12\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'12\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'12\',false);\"><A HREF=\"\/Collection-5.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 5\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f12\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;5<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"0\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link13\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'13\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'13\',false);\"><A HREF=\"\/Collection-6.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 6\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f13\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;6<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link14\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'14\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'14\',false);\"><A HREF=\"\/Collection-7.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 7\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f14\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;7<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link15\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'15\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'15\',false);\"><A HREF=\"\/Collection-8.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 8\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f15\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;8<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link16\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'16\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'16\',false);\"><A HREF=\"\/Collection-9.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection 9\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f16\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection&nbsp;9<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"0\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link17\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'17\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'17\',false);\"><A HREF=\"\/Earrings-1.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Earrings 1\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f17\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Earrings&nbsp;1<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link18\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'18\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'18\',false);\"><A HREF=\"\/Earrings-2.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Earrings 2\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f18\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Earrings&nbsp;2<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link19\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'19\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'19\',false);\"><A HREF=\"\/Earrings-3.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Earrings 3\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f19\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Earrings&nbsp;3<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link20\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'20\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'20\',false);\"><A HREF=\"\/Earrings-4.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Earrings 4\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f20\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Earrings&nbsp;4<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"0\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link21\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'21\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'21\',false);\"><A HREF=\"\/Earrings-5.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Earrings 5\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f21\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Earrings&nbsp;5<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link22\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'22\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'22\',false);\"><A HREF=\"\/Earrings-6.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Earrings 6\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f22\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Earrings&nbsp;6<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link23\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'23\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'23\',false);\"><A HREF=\"\/Seaglass-Earrings-1.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Earrings 7\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f23\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Earrings&nbsp;7<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link24\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'24\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'24\',false);\"><A HREF=\"\/Seaglass-Earrings-2.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Earrings 8\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f24\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Earrings&nbsp;8<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"0\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link25\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'25\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'25\',false);\"><A HREF=\"\/Pendants-1.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Pendants 1\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f25\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Pendants&nbsp;1<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link26\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'26\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'26\',false);\"><A HREF=\"\/Pendants-2.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Pendants 2\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f26\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Pendants&nbsp;2<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link27\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'27\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'27\',false);\"><A HREF=\"\/Seaglass-Pendants-1.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Pendants 3\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f27\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Pendants&nbsp;3<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link28\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'28\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'28\',false);\"><A HREF=\"\/Seaglass-Pendants-2.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Pendants 4\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f28\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Pendants&nbsp;4<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><TR><TD><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"0\" WIDTH=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><\/TR><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE BORDER=\"0\" CELLSPACING=\"0\" CELLPADDING=\"0\"><TR><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link29\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'29\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'29\',false);\"><A HREF=\"\/Pins-1.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Pins\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f29\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Pins<\/FONT><\/DIV><\/A><\/TD><TD WIDTH=\"5\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"5\" HEIGHT=\"1\" BORDER=\"0\" ALT=\"\"><\/TD><TD NOWRAP HEIGHT=\"27\" ALIGN=\"center\" VALIGN=\"MIDDLE\" id=\"QuickSiteMain_Link30\" style=\"cursor: pointer;cursor: hand;color:#999999;background-image:url(\/files\/QuickSiteImages\/nav_normal.jpg);background-repeat:no-repeat;background-position:center;font-weight: bold;\"  onmouseover=\"doMouseChange(nav_QuickSiteMain,this,\'30\',true);\" onmouseout=\"doMouseChange(nav_QuickSiteMain,this,\'30\',false);\"><A HREF=\"\/Collection-4B.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;vertical-align:middle;\" NAME=\"Collection-4B\"><DIV  STYLE=\"width:101px;height:27px;cursor: pointer;cursor: hand;\"><FONT ID=\"QuickSiteMain_f30\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size9 Arial9\" STYLE=\"vertical-align:middle;color:#999999;line-height:27px;\">Collection-4B<\/FONT><\/DIV><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportQuickSiteMain(nav_QuickSiteMain,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

