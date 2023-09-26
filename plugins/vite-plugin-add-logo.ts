export default function addLogo() {
	return {
		name: "add-logo",
		transformIndexHtml(html: any) {
			return `<!-- github: https://github.com/WenReq -->` + html;
		}
	};
}
