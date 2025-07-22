set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
biome := node_bin + "biome"
tsc := node_bin + "tsc"
tsdown := node_bin + "tsdown"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

react := "package"

test := "test"

example_next := "examples/next"
example_vite := "examples/vite"

# Default action
_:
    just lint
    just fmt
    just build
    just test

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
    cd ./{{react}} && ../{{tsdown}} -c ./tsdown.config.ts

# Run tests:
test:
    cd ./{{test}} && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./test && pnpm run test
    cd ./test && deno run test
    cd ./test && bun run test

# Generate APIs documentation
api:
    cd ./{{react}} && ../{{typedoc}}

# Run Next.js example
example-next:
    cd ./{{example_next}} && pnpm run dev

# Run Vite example
example-vite:
    cd ./{{example_vite}} && pnpm run dev

# Clean builds
clean:
    rm -rf ./{{example_next}}/next-env.d.ts
    rm -rf ./{{example_next}}/dist
    rm -rf ./{{example_next}}/.next
    rm -rf ./{{example_vite}}/dist
    
    rm -rf ./{{react}}/dist

# Clean everything
clean-all:
    just clean

    rm -rf ./{{example_next}}/node_modules
    rm -rf ./{{example_vite}}/node_modules

    rm -rf ./{{test}}/node_modules

    rm -rf ./{{react}}/node_modules

    rm -rf ./node_modules
