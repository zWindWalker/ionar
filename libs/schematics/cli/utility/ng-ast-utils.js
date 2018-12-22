"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const path_1 = require("path");
const ts = require("typescript");
const ast_utils_1 = require("./ast-utils");
function findBootstrapModuleCall(host, mainPath) {
    const mainBuffer = host.read(mainPath);
    if (!mainBuffer) {
        throw new schematics_1.SchematicsException(`Main file (${mainPath}) not found`);
    }
    const mainText = mainBuffer.toString('utf-8');
    const source = ts.createSourceFile(mainPath, mainText, ts.ScriptTarget.Latest, true);
    const allNodes = ast_utils_1.getSourceNodes(source);
    let bootstrapCall = null;
    for (const node of allNodes) {
        let bootstrapCallNode = null;
        bootstrapCallNode = ast_utils_1.findNode(node, ts.SyntaxKind.Identifier, 'bootstrapModule');
        // Walk up the parent until CallExpression is found.
        while (bootstrapCallNode && bootstrapCallNode.parent
            && bootstrapCallNode.parent.kind !== ts.SyntaxKind.CallExpression) {
            bootstrapCallNode = bootstrapCallNode.parent;
        }
        if (bootstrapCallNode !== null &&
            bootstrapCallNode.parent !== undefined &&
            bootstrapCallNode.parent.kind === ts.SyntaxKind.CallExpression) {
            bootstrapCall = bootstrapCallNode.parent;
            break;
        }
    }
    return bootstrapCall;
}
exports.findBootstrapModuleCall = findBootstrapModuleCall;
function findBootstrapModulePath(host, mainPath) {
    const bootstrapCall = findBootstrapModuleCall(host, mainPath);
    if (!bootstrapCall) {
        throw new schematics_1.SchematicsException('Bootstrap call not found');
    }
    const bootstrapModule = bootstrapCall.arguments[0];
    const mainBuffer = host.read(mainPath);
    if (!mainBuffer) {
        throw new schematics_1.SchematicsException(`Client app main file (${mainPath}) not found`);
    }
    const mainText = mainBuffer.toString('utf-8');
    const source = ts.createSourceFile(mainPath, mainText, ts.ScriptTarget.Latest, true);
    const allNodes = ast_utils_1.getSourceNodes(source);
    const bootstrapModuleRelativePath = allNodes
        .filter(node => node.kind === ts.SyntaxKind.ImportDeclaration)
        .filter(imp => {
        return ast_utils_1.findNode(imp, ts.SyntaxKind.Identifier, bootstrapModule.getText());
    })
        .map((imp) => {
        const modulePathStringLiteral = imp.moduleSpecifier;
        return modulePathStringLiteral.text;
    })[0];
    return bootstrapModuleRelativePath;
}
exports.findBootstrapModulePath = findBootstrapModulePath;
function getAppModulePath(host, mainPath) {
    const moduleRelativePath = findBootstrapModulePath(host, mainPath);
    const mainDir = path_1.dirname(mainPath);
    const modulePath = core_1.normalize(`/${mainDir}/${moduleRelativePath}.ts`);
    return modulePath;
}
exports.getAppModulePath = getAppModulePath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYXN0LXV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9zY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9uZy1hc3QtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCwrQ0FBaUQ7QUFDakQsMkRBQXVFO0FBQ3ZFLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsb0RBQWdFO0FBRWhFLGlDQUF3QyxJQUFVLEVBQUUsUUFBZ0I7SUFDbEUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEIsTUFBTSxJQUFJLGdDQUFtQixDQUFDLGNBQWMsUUFBUSxhQUFhLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVyRixNQUFNLFFBQVEsR0FBRywwQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXhDLElBQUksYUFBYSxHQUE2QixJQUFJLENBQUM7SUFFbkQsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFJLGlCQUFpQixHQUFtQixJQUFJLENBQUM7UUFDN0MsaUJBQWlCLEdBQUcsb0JBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUVoRixvREFBb0Q7UUFDcEQsT0FBTyxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNO2VBQy9DLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVwRSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7UUFDL0MsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixLQUFLLElBQUk7WUFDNUIsaUJBQWlCLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDdEMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakUsYUFBYSxHQUFHLGlCQUFpQixDQUFDLE1BQTJCLENBQUM7WUFDOUQsS0FBSyxDQUFDO1FBQ1IsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQ3ZCLENBQUM7QUFqQ0QsMERBaUNDO0FBRUQsaUNBQXdDLElBQVUsRUFBRSxRQUFnQjtJQUNsRSxNQUFNLGFBQWEsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxNQUFNLGVBQWUsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5ELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyx5QkFBeUIsUUFBUSxhQUFhLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBQ0QsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRixNQUFNLFFBQVEsR0FBRywwQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sMkJBQTJCLEdBQUcsUUFBUTtTQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7U0FDN0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1osTUFBTSxDQUFDLG9CQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUMsQ0FBQztTQUNELEdBQUcsQ0FBQyxDQUFDLEdBQXlCLEVBQUUsRUFBRTtRQUNqQyxNQUFNLHVCQUF1QixHQUFzQixHQUFHLENBQUMsZUFBZSxDQUFDO1FBRXZFLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUixNQUFNLENBQUMsMkJBQTJCLENBQUM7QUFDckMsQ0FBQztBQTNCRCwwREEyQkM7QUFFRCwwQkFBaUMsSUFBVSxFQUFFLFFBQWdCO0lBQzNELE1BQU0sa0JBQWtCLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sT0FBTyxHQUFHLGNBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxNQUFNLFVBQVUsR0FBRyxnQkFBUyxDQUFDLElBQUksT0FBTyxJQUFJLGtCQUFrQixLQUFLLENBQUMsQ0FBQztJQUVyRSxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFORCw0Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IFNjaGVtYXRpY3NFeGNlcHRpb24sIFRyZWUgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7IGZpbmROb2RlLCBnZXRTb3VyY2VOb2RlcyB9IGZyb20gJy4uL3V0aWxpdHkvYXN0LXV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCb290c3RyYXBNb2R1bGVDYWxsKGhvc3Q6IFRyZWUsIG1haW5QYXRoOiBzdHJpbmcpOiB0cy5DYWxsRXhwcmVzc2lvbiB8IG51bGwge1xuICBjb25zdCBtYWluQnVmZmVyID0gaG9zdC5yZWFkKG1haW5QYXRoKTtcbiAgaWYgKCFtYWluQnVmZmVyKSB7XG4gICAgdGhyb3cgbmV3IFNjaGVtYXRpY3NFeGNlcHRpb24oYE1haW4gZmlsZSAoJHttYWluUGF0aH0pIG5vdCBmb3VuZGApO1xuICB9XG4gIGNvbnN0IG1haW5UZXh0ID0gbWFpbkJ1ZmZlci50b1N0cmluZygndXRmLTgnKTtcbiAgY29uc3Qgc291cmNlID0gdHMuY3JlYXRlU291cmNlRmlsZShtYWluUGF0aCwgbWFpblRleHQsIHRzLlNjcmlwdFRhcmdldC5MYXRlc3QsIHRydWUpO1xuXG4gIGNvbnN0IGFsbE5vZGVzID0gZ2V0U291cmNlTm9kZXMoc291cmNlKTtcblxuICBsZXQgYm9vdHN0cmFwQ2FsbDogdHMuQ2FsbEV4cHJlc3Npb24gfCBudWxsID0gbnVsbDtcblxuICBmb3IgKGNvbnN0IG5vZGUgb2YgYWxsTm9kZXMpIHtcblxuICAgIGxldCBib290c3RyYXBDYWxsTm9kZTogdHMuTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIGJvb3RzdHJhcENhbGxOb2RlID0gZmluZE5vZGUobm9kZSwgdHMuU3ludGF4S2luZC5JZGVudGlmaWVyLCAnYm9vdHN0cmFwTW9kdWxlJyk7XG5cbiAgICAvLyBXYWxrIHVwIHRoZSBwYXJlbnQgdW50aWwgQ2FsbEV4cHJlc3Npb24gaXMgZm91bmQuXG4gICAgd2hpbGUgKGJvb3RzdHJhcENhbGxOb2RlICYmIGJvb3RzdHJhcENhbGxOb2RlLnBhcmVudFxuICAgICAgJiYgYm9vdHN0cmFwQ2FsbE5vZGUucGFyZW50LmtpbmQgIT09IHRzLlN5bnRheEtpbmQuQ2FsbEV4cHJlc3Npb24pIHtcblxuICAgICAgYm9vdHN0cmFwQ2FsbE5vZGUgPSBib290c3RyYXBDYWxsTm9kZS5wYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGJvb3RzdHJhcENhbGxOb2RlICE9PSBudWxsICYmXG4gICAgICBib290c3RyYXBDYWxsTm9kZS5wYXJlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgYm9vdHN0cmFwQ2FsbE5vZGUucGFyZW50LmtpbmQgPT09IHRzLlN5bnRheEtpbmQuQ2FsbEV4cHJlc3Npb24pIHtcbiAgICAgIGJvb3RzdHJhcENhbGwgPSBib290c3RyYXBDYWxsTm9kZS5wYXJlbnQgYXMgdHMuQ2FsbEV4cHJlc3Npb247XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9vdHN0cmFwQ2FsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCb290c3RyYXBNb2R1bGVQYXRoKGhvc3Q6IFRyZWUsIG1haW5QYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBib290c3RyYXBDYWxsID0gZmluZEJvb3RzdHJhcE1vZHVsZUNhbGwoaG9zdCwgbWFpblBhdGgpO1xuICBpZiAoIWJvb3RzdHJhcENhbGwpIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbignQm9vdHN0cmFwIGNhbGwgbm90IGZvdW5kJyk7XG4gIH1cblxuICBjb25zdCBib290c3RyYXBNb2R1bGUgPSBib290c3RyYXBDYWxsLmFyZ3VtZW50c1swXTtcblxuICBjb25zdCBtYWluQnVmZmVyID0gaG9zdC5yZWFkKG1haW5QYXRoKTtcbiAgaWYgKCFtYWluQnVmZmVyKSB7XG4gICAgdGhyb3cgbmV3IFNjaGVtYXRpY3NFeGNlcHRpb24oYENsaWVudCBhcHAgbWFpbiBmaWxlICgke21haW5QYXRofSkgbm90IGZvdW5kYCk7XG4gIH1cbiAgY29uc3QgbWFpblRleHQgPSBtYWluQnVmZmVyLnRvU3RyaW5nKCd1dGYtOCcpO1xuICBjb25zdCBzb3VyY2UgPSB0cy5jcmVhdGVTb3VyY2VGaWxlKG1haW5QYXRoLCBtYWluVGV4dCwgdHMuU2NyaXB0VGFyZ2V0LkxhdGVzdCwgdHJ1ZSk7XG4gIGNvbnN0IGFsbE5vZGVzID0gZ2V0U291cmNlTm9kZXMoc291cmNlKTtcbiAgY29uc3QgYm9vdHN0cmFwTW9kdWxlUmVsYXRpdmVQYXRoID0gYWxsTm9kZXNcbiAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5raW5kID09PSB0cy5TeW50YXhLaW5kLkltcG9ydERlY2xhcmF0aW9uKVxuICAgIC5maWx0ZXIoaW1wID0+IHtcbiAgICAgIHJldHVybiBmaW5kTm9kZShpbXAsIHRzLlN5bnRheEtpbmQuSWRlbnRpZmllciwgYm9vdHN0cmFwTW9kdWxlLmdldFRleHQoKSk7XG4gICAgfSlcbiAgICAubWFwKChpbXA6IHRzLkltcG9ydERlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtb2R1bGVQYXRoU3RyaW5nTGl0ZXJhbCA9IDx0cy5TdHJpbmdMaXRlcmFsPiBpbXAubW9kdWxlU3BlY2lmaWVyO1xuXG4gICAgICByZXR1cm4gbW9kdWxlUGF0aFN0cmluZ0xpdGVyYWwudGV4dDtcbiAgICB9KVswXTtcblxuICByZXR1cm4gYm9vdHN0cmFwTW9kdWxlUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwTW9kdWxlUGF0aChob3N0OiBUcmVlLCBtYWluUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbW9kdWxlUmVsYXRpdmVQYXRoID0gZmluZEJvb3RzdHJhcE1vZHVsZVBhdGgoaG9zdCwgbWFpblBhdGgpO1xuICBjb25zdCBtYWluRGlyID0gZGlybmFtZShtYWluUGF0aCk7XG4gIGNvbnN0IG1vZHVsZVBhdGggPSBub3JtYWxpemUoYC8ke21haW5EaXJ9LyR7bW9kdWxlUmVsYXRpdmVQYXRofS50c2ApO1xuXG4gIHJldHVybiBtb2R1bGVQYXRoO1xufVxuIl19