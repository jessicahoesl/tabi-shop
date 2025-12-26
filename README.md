# 🛒 TaBi Shop (Tafelbilder Digital Store)

A modern, serverless e-commerce platform built to sell digital educational resources ("Tafelbilder") for Teachers.

Build with **Next.js 16**, **TypeScript**, and **Stripe**.

![Project Status](https://img.shields.io/badge/Status-In_Development-yellow)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)

## 🚀 Tech Stack

* **Frontend:** Next.js 16 (App Router), React, TypeScript
* **Styling:** Tailwind CSS
* **Payments:** Stripe Checkout (Hosted Sessions)
* **Infrastructure:** Docker (Multi-stage builds), Caddy (Reverse Proxy)

## 🛠️ Getting Started

### Prerequisites
* Docker & Docker Compose
* Node.js 22+ (Optional, if running without Docker)
* A Stripe Account (Test Mode)

### Usage

#### For Development
```bash
docker compose -f docker-compose.dev.yml up 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### For Production
```bash
docker compose -f docker-compose.prod.yml up 
```

## ☁️ Deployment

This project is containerized using Docker and is designed to run on any VPS (Hetzner, DigitalOcean) behind a Caddy reverse proxy for automatic HTTPS.

## 🗺️ Roadmap

* [x] Basic Product Grid
* [x] Stripe Checkout Integration
* [ ] Database Integration (Supabase/PostgreSQL) for dynamic inventory
* [ ] Automated Email Delivery (Stripe Webhooks + Resend API)
* [ ] Admin Dashboard

## 📄 Licence

MIT License

Copyright (c) 2025 Jessica Hösl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
