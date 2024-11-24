<template>
  <ThemeSwitcher />
  <div class="card">
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedCustomers"
      :value="student"
      paginator
      :rows="10"
      dataKey="id"
      filterDisplay="menu"
      :globalFilterFields="['lname', 'fname', 'mname', 'address', 'bp']"
    >
      <template #header>
        <div class="flex justify-between">
          <RouterLink to="/add">
            <Button
              type="button"
              icon="pi pi-filter-slash"
              label="Add Student"
              outlined
            />
          </RouterLink>
          <span class="relative">
            <i
              class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600"
            />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
              class="pl-10 font-normal"
            />
          </span>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <Column field="lname" header="Lastname" sortable style="min-width: 14rem">
      </Column>
      <Column
        field="fname"
        header="Firstname"
        sortable
        style="min-width: 14rem"
      >
      </Column>
      <Column
        field="mname"
        header="Middle Initial"
        sortable
        style="min-width: 14rem"
      >
      </Column>
      <Column
        field="address"
        header="Address"
        sortable
        style="min-width: 10rem"
      >
      </Column>
      <Column field="sex" header="Sex" sortable style="min-width: 10rem">
      </Column>
      <Column header="Age" field="age" sortable style="min-width: 12rem">
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CustomerService } from "./service/CustomerService.js";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { db } from "@/stores/firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";

const student = ref();
const filters = ref();

onMounted(() => {
  fetchData();
  // CustomerService.getCustomersLarge().then((data) => {
  //     customers.value = getCustomers(data);
  // });
});

const fetchData = async () => {
  try {
    let students = [];
    const querySnapshot = await getDocs(query(collection(db, "students")));
    querySnapshot.forEach((doc) => {
      students.push(doc.data());
    });
    student.value = students;
    console.log(students);
  } catch (error) {
    console.log(error);
  }
};

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    lname: { value: null },
    fname: { value: null },
    mname: { value: null },
    address: { value: null },
    age: { value: null },
    bmi: { value: null },
    bp: { value: null },
  };
};

initFilters();

const clearFilter = () => {
  initFilters();
};
</script>
