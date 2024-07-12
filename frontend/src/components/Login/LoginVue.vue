<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
  <el-form-item label="User" prop="user">
    <el-input v-model="ruleForm.user" />
  </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" show-password />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import UserAuth from '@/stores/store';
import router from '@/router';
const UseAuth = UserAuth()
const rememberMe = ref(false)
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validateUser = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the Username'))
  } else {
    if (ruleForm.checkUser !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const ruleForm = reactive({
  pass: '',
  checkPass: '',
  user: '',
  checkUser: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  user: [{ validator: validateUser, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      LoginUser()
    } else {
      console.log('error submit!')
    }
  })
}
const LoginUser = async () => {
  const login = await UseAuth.login(ruleForm.user, ruleForm.pass, rememberMe.value)
  if (UseAuth.errores !== null){
    window.alert(UseAuth.mensaje)

       } else {
        window.alert("Login correcto")
      router.push('/note')
      console.log('submit!')
  }   
}
</script>
