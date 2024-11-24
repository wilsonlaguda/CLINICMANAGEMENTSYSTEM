<template>
    <!-- Main Content -->
    <div class="w full">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-5">Add Student</h2>
            <form @submit.prevent="submit(student)">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block mb-1 font-medium">Last Name</label>
                        <input v-model="student.lname" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">First Name</label>
                        <input v-model="student.fname" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Middle Initial</label>
                        <input v-model="student.mname" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Home Address</label>
                        <input v-model="student.address"type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Age</label>
                        <input v-model="student.age" type="number" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Sex</label>
                        <select v-model="student.sex" class="w-full border border-gray-300 p-2 rounded">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Student Photo</label>
                        <input type="file" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Student Lab test</label>
                        <input type="file" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Nationality</label>
                        <input v-model="student.nationality" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Contact Number</label>
                        <input v-model="student.contact" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Religion</label>
                        <input v-model="student.religion" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Year Level</label>
                        <select v-model="student.yrlevel" class="w-full border border-gray-300 p-2 rounded">
                            <option value="1st year">1st year</option>
                            <option value="2nd year">2nd year</option>
                            <option value="3rd year">3rd year</option>
                            <option value="4th year">4th year</option>
                        </select>
                    </div>
                    <div class="md:col-span-1">
                        <label class="block mb-1 font-medium">Course</label>
                        <select v-model="student.course" class="w-full border border-gray-300 p-2 rounded">
                            <option value="BSIT">BSIT</option>
                            <option value="BSCS">BSCS</option>
                            <option value="BSECE">BSECE</option>
                        </select>
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Name of Parent's/Guardian</label>
                        <input v-model="student.parentsname" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Occupation</label>
                        <input v-model="student.occupation" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Parent's Address</label>
                        <input v-model="student.parentsaddress" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Parent's Contact Number</label>
                        <input v-model="student.parentscontact" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    <div>
                        <label class="block mb-1 font-medium">Height</label>
                        <input v-model="student.height" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Weight</label>
                        <input v-model="student.weight" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">BMI</label>
                        <input v-model="student.bmi" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">Temperature</label>
                        <input v-model="student.temperature" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">BP</label>
                        <input v-model="student.bp" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">PR</label>
                        <input v-model="student.pr" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">RR</label>
                        <input v-model="student.rr" type="text" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                </div>

                <div class="mt-10 flex justify-end">
                    <button type="submit" class="bg-blue-500 text-white p-3 rounded">Add Student</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "@/stores/firebase.js";

const student = ref({
  lname: "",
  fname: "",
  mname: "",
  address: "",
  age: "",
  sex: "",
  nationality: "",
  contact: "",
  religion: "",
  yrlevel: "",
  course: "",
  parentsname: "",
  occupation: "",
  parentsaddress: "",
  parentscontact: "",
  height: null,
  weight: null,
  bmi: null, // This will store the final BMI if needed
  temperature: "",
  bp: "",
  pr: "",
  rr: "",
});

// Computed property to calculate BMI
const calculatedBMI = computed(() => {
  const height = parseFloat(student.value.height);
  const weight = parseFloat(student.value.weight);

  if (!height || !weight || height <= 0) return "N/A"; // Handle invalid inputs
  const bmi = weight / (height * height);
  return bmi.toFixed(2); // Return BMI with two decimal places
});

const submit = async (data) => {
  // Include BMI in the student data before saving
  data.bmi = calculatedBMI.value;

  console.log({ ...data });
  try {
    await setDoc(doc(collection(db, "students")), data);
  } catch (error) {
    console.log(error);
  }
};
</script>
