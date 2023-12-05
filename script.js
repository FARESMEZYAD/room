// عند النقر على زر إنشاء الاجتماع
document.getElementById("create-meeting-btn").addEventListener("click", function() {
  var meetingTitle = document.getElementById("meeting-title").value;
  var meetingDescription = document.getElementById("meeting-description").value;
  var meetingDate = document.getElementById("meeting-date").value;

  // قم بإنشاء الاجتماع وتخزينه في الملف المشترك
  // يمكنك استخدام تقنيات مثل localStorage لتخزين البيانات المحلية

  // قم بعرض نموذج المشاركة
  document.getElementById("meeting-form").style.display = "none";
  document.getElementById("participants-form").style.display = "block";
});

// عند النقر على زر مشاركة رمز الاجتماع
// document.getElementById("share-code-btn").addEventListener("click", function() {
//   var meetingCode = document.getElementById("meeting-code").value;

//   // قم بمشاركة رمز الاجتماع مع المشاركين الآخرين عبر وسائل التواصل المختلفة

//   // قم بعرض نموذج أوقات التوفر
//   document.getElementById("participants-form").style.display = "none";
//   document.getElementById("availability-form").style.display = "block";
// });

// عند النقر على زر إرسال التوفر
document.getElementById("submit-availability-btn").addEventListener("click", function() {
  var availabilityList = document.getElementsByName("availability");
  var selectedTimes = [];
 


  // قم بالتحقق من الأوقات المحددة وتخزينها في مصفوفة selectedTimes

  // قم بعرض التقويم وأوقات التوفر للمشاركين الآخرين
  document.getElementById("availability-form").style.display = "none";
  document.getElementById("calendar").style.display = "block";

  var availabilityListElement = document.getElementById("availability-list");
  availabilityListElement.innerHTML = "";

});

document.getElementById("select-time-btn").addEventListener("click", function() {
  // قم بتحديد الوقت الأنسب بناءً على أوقات التوفر المعروضة في التقويم

  // قم بعرض الوقت المحدد
  document.getElementById("selected-time").innerHTML = document.getElementById("meeting-date").value;
});








document.getElementById("export-button").addEventListener("click", function() {
  var meetingTitle = document.getElementById("meeting-title").value;
  var meetingDescription = document.getElementById("meeting-description").value;
  var meetingDate = document.getElementById("meeting-date").value;
  var meetingCode = document.getElementById("meeting-code").value;
  
  var fileContent = "عنوان الاجتماع: " + meetingTitle + "\n";
  fileContent += "وصف الاجتماع: " + meetingDescription + "\n";
  fileContent += "تاريخ الاجتماع: " + meetingDate + "\n";
  fileContent += "كود الاجتماع: " + meetingCode + "\n";
  
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent));
  element.setAttribute("download", "meeting-details.txt");
  element.style.display = "none";
  
  document.body.appendChild(element);
  
  element.click();
  
  document.body.removeChild(element);
});









function login() {
  var meetingCode = document.getElementById("meeting-code").value;
  // قم بإجراء الإجراءات اللازمة باستخدام قيمة المدخل (مثال: إرسال القيمة إلى الخادم للتحقق منها)

  // مثال: طباعة قيمة المدخل في وحدة التحكم
  console.log("قيمة المدخل: " + meetingCode);

  // قم بإجراء التحقق من القيمة واتخاذ الإجراء المناسب
  if (meetingCode === "الكود الصحيح") {
    // قم بتنفيذ إجراءات تسجيل الدخول الصحيحة
    console.log("تم تسجيل الدخول بنجاح!");
  } else {
    // قم بإظهار رسالة خطأ أو اتخاذ إجراء آخر في حالة قيمة المدخل غير صحيحة
    console.log("قيمة المدخل غير صحيحة. تعذر تسجيل الدخول.");
  }
}

document.getElementById("share-code-btn").addEventListener("click", function() {
  var meetingCode = document.getElementById("meeting-code").value;

  // قم بمشاركة رمز الاجتماع مع المشاركين الآخرين عبر وسائل التواصل المختلفة

  // قم بعرض نموذج أوقات التوفر
  document.getElementById("participants-form").style.display = "none";
  document.getElementById("availability-form").style.display = "block";

  // قم بفحص إذا ما كان رمز الاجتماع صحيحًا قبل تنفيذ إجراءات التسجيل
  if (meetingCode === "الكود الصحيح") {
    login();
  }
});
