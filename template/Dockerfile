FROM denoland/deno:2.4.3 AS build

WORKDIR /app

ENV DENO_DIR=/deno-dir
COPY deno.jsonc ./  

COPY . .
RUN deno cache src/main.tsx

# Install Tailwind
RUN apt-get update && \
    apt-get install -y curl unzip nodejs npm watchman && \
    npm install tailwindcss @tailwindcss/cli


# Bundle client and Tailwind
RUN deno bundle --platform browser --output public/static/bundle.js src/client/App.tsx
RUN npx @tailwindcss/cli  -i ./src/layout.css -o ./public/static/styles.css

FROM denoland/deno:2.4.3

WORKDIR /app

ENV DENO_DIR=/deno-dir

COPY --from=build /app/public /app/public
COPY --from=build /app/src /app/src
COPY --from=build /app/Dockerfile /app/Dockerfile
COPY --from=build /app/deno.jsonc /app/deno.jsonc
COPY --from=build /app/deno.lock /app/deno.lock
COPY --from=build /deno-dir /deno-dir

EXPOSE 8000

CMD ["deno", "task", "production"]