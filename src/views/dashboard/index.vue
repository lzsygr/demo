<template>
    <div class="dashboard">
        <a-row :gutter="24">
            <a-col :span="6">
                <a-card>
                    <a-statistic
                            title="总访问量"
                            :value="112893"
                            style="margin-right: 50px"
                    >
                        <template #prefix>
                            <a-icon type="user" />
                        </template>
                    </a-statistic>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card>
                    <a-statistic
                            title="销售额"
                            :value="235624"
                            :precision="2"
                    >
                        <template #prefix>
                            <a-icon type="dollar" />
                        </template>
                    </a-statistic>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card>
                    <a-statistic
                            title="订单量"
                            :value="1893"
                    >
                        <template #prefix>
                            <a-icon type="shopping-cart" />
                        </template>
                    </a-statistic>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card>
                    <a-statistic
                            title="用户数"
                            :value="3456"
                    >
                        <template #prefix>
                            <a-icon type="team" />
                        </template>
                    </a-statistic>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
  export default {
    name: 'Dashboard'
  }
</script>
