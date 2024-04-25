const types = require('@babel/types');

function error(msg) {
    throw new Error(`babel-plugin-occ-atomic: ${msg}`);
}

function getImportsList(path) {
    return path.node.specifiers.filter(function (specifier) {
        if (specifier.type !== 'ImportSpecifier') {
            error(
                'Import entire module detected. Using this syntax means we cannot tree shake properly.'
            );
        } else return true;
    });
}

function importDeclaration(specifier, path) {
    return types.importDeclaration([specifier], types.stringLiteral(path));
}

function replaceImport(path, statements) {
    if (statements.length > 0) {
        path.replaceWithMultiple(statements);
    }
    return path;
}

const subatomic = [
    'colors',
    'fonts',
    'grid',
    'icons',
    'iconSizes',
    'shadows',
    'spacing'
];

function importModule(path) {
    const importsList = getImportsList(path);
    const importStatements = importsList.map(function (specifier) {
        const importName = specifier.imported.name;
        if (importName === 'toaster') {
            return importDeclaration(
                specifier,
                '@occmundial/occ-atomic/build/Toaster/functions'
            );
        } else if (importName === 'Nav' || importName === 'Menu') {
            return importDeclaration(
                specifier,
                `@occmundial/occ-atomic/build/Header/${importName}`
            );
        } else if (importName === 'AtomicProvider') {
            return importDeclaration(
                types.importDefaultSpecifier(types.identifier('Provider')),
                '@occmundial/occ-atomic/build/Provider'
            );
        } else if (subatomic.includes(importName)) {
            return importDeclaration(
                types.importDefaultSpecifier(types.identifier(importName)),
                `@occmundial/occ-atomic/build/subatomic/${importName}`
            );
        }
        return importDeclaration(
            types.importDefaultSpecifier(types.identifier(importName)),
            `@occmundial/occ-atomic/build/${importName}`
        );
    });
    replaceImport(path, importStatements);
}

module.exports = function () {
    return {
        visitor: {
            ImportDeclaration: function (path) {
                if (path.node.source.value === '@occmundial/occ-atomic') {
                    return importModule(path);
                }
            }
        }
    };
};
