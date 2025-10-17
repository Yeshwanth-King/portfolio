# Google Analytics Setup Guide

## 🎯 Step-by-Step Instructions

### **1. Create Google Analytics Account**

1. **Go to**: https://analytics.google.com/
2. **Sign in** with your Google account
3. **Click "Start measuring"**

### **2. Account Setup**
- **Account name**: `Yeshwanth R Portfolio`
- **Data sharing settings**: Choose your preferences
- **Click "Next"**

### **3. Property Setup**
- **Property name**: `yeshwanth.live`
- **Reporting time zone**: `India Standard Time`
- **Currency**: `INR (Indian Rupee)`
- **Click "Next"**

### **4. Business Information**
- **Industry category**: `Technology`
- **Business size**: `Small (1-10 employees)`
- **How you plan to use Analytics**: `Get baseline reports`
- **Click "Create"**

### **5. Get Your Measurement ID**

After creating the property, you'll get a **Measurement ID** that looks like:
```
G-XXXXXXXXXX
```

### **6. Add Environment Variable**

Create a file called `.env.local` in your project root with:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID**

### **7. Deploy Your Changes**

1. **Commit and push** your changes
2. **Add the environment variable** to your hosting platform (Vercel)
3. **Redeploy** your site

## 🔧 What I've Added to Your Code

### **1. GoogleAnalytics Component** (`src/components/GoogleAnalytics.tsx`)
- ✅ **Next.js Script optimization** for better performance
- ✅ **Environment variable support** for security
- ✅ **Automatic page tracking** with title and location
- ✅ **Conditional loading** (only loads if ID is provided)

### **2. Layout Integration** (`src/app/layout.tsx`)
- ✅ **Imported GoogleAnalytics component**
- ✅ **Added to layout** for site-wide tracking
- ✅ **Proper script loading** with Next.js optimization

## 📊 What You'll Track

### **Automatic Tracking:**
- ✅ **Page views** - Every page visit
- ✅ **Session duration** - How long users stay
- ✅ **Bounce rate** - Single-page visits
- ✅ **Traffic sources** - Where visitors come from
- ✅ **Device information** - Mobile, desktop, tablet
- ✅ **Geographic data** - Where your visitors are located

### **Custom Events (Optional):**
You can add custom tracking for:
- **Button clicks** (Download Resume, Contact Form)
- **Project interactions** (Live Demo clicks)
- **Form submissions** (Contact form)
- **Scroll depth** (How far users scroll)

## 🚀 Benefits

### **For Your Portfolio:**
- 📈 **Visitor insights** - Who's viewing your portfolio
- 🎯 **Popular sections** - Which parts get most attention
- 📱 **Device analytics** - Mobile vs desktop usage
- 🌍 **Geographic data** - Where your audience is located
- ⏱️ **Engagement metrics** - How long people stay

### **For Your Career:**
- 📊 **Professional metrics** - Show potential employers your reach
- 🎯 **Audience insights** - Understand your professional network
- 📈 **Growth tracking** - Monitor portfolio performance over time
- 🔍 **SEO insights** - See which keywords bring traffic

## 🧪 Testing Your Setup

### **1. Real-Time Reports**
1. Go to **Google Analytics** → **Reports** → **Realtime**
2. Visit your website: https://yeshwanth.live
3. You should see **1 active user** in real-time

### **2. Debug Mode**
Add `?debug=true` to your URL to see analytics events in browser console

### **3. Google Tag Assistant**
Install the Chrome extension to verify tracking is working

## 📱 Mobile Analytics

Your portfolio will also track:
- **Mobile users** and their behavior
- **Touch interactions** and mobile-specific metrics
- **App-like experience** with PWA features

## 🎉 You're All Set!

Once you add your Measurement ID to `.env.local` and deploy:
- ✅ **Analytics will start collecting data** immediately
- ✅ **Real-time reports** will show live visitors
- ✅ **Historical data** will build over time
- ✅ **Professional insights** for your career growth

Your portfolio is now **fully analytics-enabled**! 🚀
