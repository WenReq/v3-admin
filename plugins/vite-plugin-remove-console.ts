import { transformSync } from "@babel/core";

function removeASTConsole(api: any) {
	const { types } = api;
	return {
		visitor: {
			CallExpression(path: any) {
				if (
					types.isIdentifier(path.node.callee.object, {
						name: "console"
					})
				) {
					path.remove();
				}
			}
		}
	};
}

export default function RemoveConsole() {
	return {
		name: "remove-console",
		transform(args: any) {
			const [src, id] = args;
			const exclude = [/node_modules\//];
			const include = [/\.js/];

			const check = !exclude.some(item => new RegExp(item).test(id)) && include.some(item => new RegExp(item).test(id));

			if (check) {
				const transformCode = transformSync(src, {
					ast: true,
					plugins: [removeASTConsole]
				}).code;

				return {
					code: transformCode,
					map: null // 如果可行将提供 source map
				};
			}
		}
	};
}
