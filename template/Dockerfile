FROM denoland/deno:2.4.3 AS build

WORKDIR /app

ENV DENO_DIR=/deno-dir
COPY deno.jsonc ./  

COPY src/main.tsx .      

RUN deno cache src/main.tsx

# Install Tailwind
RUN apt-get update && \
    apt-get install -y curl unzip nodejs npm watchman && \
    npm install tailwindcss @tailwindcss/cli

COPY . .

# Bundle client and Tailwind
RUN deno bundle --platform browser --output public/static/bundle.js src/client/App.tsx
RUN npx @tailwindcss/cli  -i ./src/layout.css -o ./public/static/styles.css

FROM denoland/deno:2.4.3

WORKDIR /app

ENV DENO_DIR=/deno-dir

COPY --from=build /app /app
COPY --from=build /deno-dir /deno-dir

EXPOSE 8000

CMD ["run", "--allow-net", "--allow-read", "src/main.tsx"]