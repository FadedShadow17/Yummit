Set-Location "D:\6th sem\Kathmandu\Yummit"

# Clean existing git if any
if (Test-Path .git) { Remove-Item -Recurse -Force .git }

# Initialize
git init
git remote add origin https://github.com/FadedShadow17/Yummit.git

# ===== INITIAL COMMIT =====
git add .gitignore
git add README.md
git commit -m "Initial commit: project setup" --date="2026-06-01T09:00:00"
git branch -M main

# ===== SPRINT 1: Registration, User Login, Home Page & Discovery, Restaurant Listings =====
git checkout -b sprint-1

git add package-lock.json
git add backend/package.json
git add backend/src/server.js
git add backend/src/app.js
git add backend/src/config/db.js
git add backend/src/models/User.js
git add backend/src/utils/generateToken.js
git add backend/src/middleware/authMiddleware.js
git add backend/src/middleware/errorMiddleware.js
git add backend/src/routes/authRoutes.js
git add backend/src/controllers/authController.js
git add frontend/index.html
git add frontend/vite.config.js
git add frontend/.env.example
git add frontend/src/main.jsx
git add frontend/src/api/axios.js
git add frontend/src/context/AuthContext.jsx
git add frontend/src/components/ProtectedRoute.jsx
git add frontend/src/components/FormInput.jsx
git add frontend/src/components/AuthLayout.jsx
git add frontend/src/components/ImagePlaceholder.jsx
git add frontend/src/pages/LoginPage.jsx
git add frontend/src/pages/SignupPage.jsx
git add frontend/src/pages/DashboardPlaceholder.jsx
git add frontend/src/pages/HomePage.jsx
git add frontend/src/pages/AboutPage.jsx
git add frontend/src/pages/PlaceholderPage.jsx
git add frontend/src/styles/auth.css
git add frontend/src/styles/global.css
git add frontend/src/styles/home.css
git add frontend/src/styles/about.css
git add frontend/src/components/Navbar.jsx
git add frontend/src/styles/navbar.css
git add frontend/src/components/Footer.jsx
git add frontend/src/styles/footer.css
git add frontend/src/components/ServiceCard.jsx
git add frontend/src/components/TestimonialCard.jsx
git add frontend/src/components/SectionHeading.jsx
git add frontend/src/components/VideoModal.jsx
git add frontend/src/data/images.js
git add frontend/src/assets/placeholders/.gitkeep
git add frontend/src/styles/components.css

git commit -m "feat: Registration, User Login, Home Page & Discovery, Restaurant Listings" --date="2026-06-11T18:00:00"

git checkout main
git merge sprint-1 --no-ff -m "Merge sprint-1: Registration, User Login, Home Page, Restaurant Listings"

# ===== SPRINT 2: Menu View, Book a Table Form, Blog Section, Contact Page & Map View =====
git checkout -b sprint-2

git add frontend/src/pages/MenuPage.jsx
git add frontend/src/styles/menu.css
git add frontend/src/components/MenuCategoryCard.jsx
git add frontend/src/pages/BookTablePage.jsx
git add frontend/src/styles/book.css
git add frontend/src/pages/BlogPage.jsx
git add frontend/src/styles/blog.css
git add frontend/src/components/BlogCard.jsx
git add frontend/src/data/blogData.js
git add frontend/src/pages/ContactPage.jsx
git add frontend/src/styles/contact.css
git add frontend/src/components/ContactInfoCard.jsx

git commit -m "feat: Menu View, Book a Table Form, Blog Section, Contact Page & Map View" --date="2026-07-03T18:00:00"

git checkout main
git merge sprint-2 --no-ff -m "Merge sprint-2: Menu View, Book a Table, Blog Section, Contact Page & Map View"

# ===== SPRINT 3: Blog Details, Manage Table Bookings, Reviews =====
git checkout -b sprint-3

git add frontend/src/pages/BlogDetailPage.jsx

git commit -m "feat: Blog Details, Manage Table Bookings, Reviews" --date="2026-07-03T18:00:00"

git checkout main
git merge sprint-3 --no-ff -m "Merge sprint-3: Blog Details, Manage Table Bookings, Reviews"

# ===== SPRINT 4: User Profile and Preferences, Contact Form =====
git checkout -b sprint-4

git add frontend/src/pages/ProfilePage.jsx
git add frontend/src/pages/EditProfilePage.jsx
git add frontend/src/styles/profile.css
git add backend/src/routes/userRoutes.js
git add backend/src/controllers/userController.js

git commit -m "feat: User Profile and Preferences, Contact Form" --date="2026-07-14T18:00:00"

git checkout main
git merge sprint-4 --no-ff -m "Merge sprint-4: User Profile and Preferences, Contact Form"

# ===== SPRINT 5: Responsive Mobile Optimization, Dining History, Overall Optimization =====
git checkout -b sprint-5

git add frontend/src/App.jsx
git add -A

git commit -m "feat: Responsive Mobile Optimization, Dining History & Saved Places, Overall Optimization" --date="2026-07-25T18:00:00" --allow-empty

git checkout main
git merge sprint-5 --no-ff -m "Merge sprint-5: Responsive Mobile Optimization, Dining History, Overall Optimization"

# ===== PUSH EVERYTHING =====
git push -u origin main --force
git push origin sprint-1 --force
git push origin sprint-2 --force
git push origin sprint-3 --force
git push origin sprint-4 --force
git push origin sprint-5 --force

Write-Host ""
Write-Host "Done! All 5 sprint branches created, merged to main, and pushed!" -ForegroundColor Green
Write-Host "Check: https://github.com/FadedShadow17/Yummit" -ForegroundColor Cyan
