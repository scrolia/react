set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
biome := node_bin + "biome"
tsc := node_bin + "tsc"
rslib := node_bin + "rslib"
sass := node_bin + "sass"
typedoc := node_bin + "typedoc"

react := "./package"

example_next_app := "./examples/next/app/"
example_next_page := "./examples/next/page/"
example_react_common := "./examples/react/common"
example_react_panda := "./examples/react/panda"

# Default action
_:
    just lint
    just fmt
    just build

# Install
i:
    pnpm install

# Setup the project
setup:
    brew install ls-lint typos-cli
    just i

# Lint with TypeScript Compiler
tsc:
    cd ./{{react}} && ../{{tsc}} --noEmit

# Lint code
lint:
    ls-lint
    typos
    just tsc

# Format code
fmt:
    ./{{biome}} check --write .

# Build package
build:
    cd ./{{react}} && ../{{rslib}} build
    cd ./{{react}} && ../{{sass}} static/index.scss:dist/index.css

# Generate APIs documentation
api:
    cd ./{{react}} && ../{{typedoc}}

# Clean builds
clean:
    rm -rf ./{{example_next_app}}/next-env.d.ts
    rm -rf ./{{example_next_app}}/dist
    rm -rf ./{{example_next_app}}/.next
    rm -rf ./{{example_next_page}}/next-env.d.ts
    rm -rf ./{{example_next_page}}/dist
    rm -rf ./{{example_next_page}}/.next
    rm -rf ./{{example_react_common}}/dist
    rm -rf ./{{example_react_panda}}/dist
    rm -rf ./{{example_react_panda}}/.panda
    
    rm -rf ./{{react}}/dist

# Clean everything
clean-all:
    just clean

    rm -rf ./{{example_next_app}}/node_modules
    rm -rf ./{{example_next_page}}/node_modules
    rm -rf ./{{example_react_common}}/node_modules
    rm -rf ./{{example_react_panda}}/node_modules

    rm -rf ./{{react}}/node_modules

    rm -rf ./node_modules
