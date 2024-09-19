<script lang="ts" setup>
  const auth = useAuthStore()
  const user = auth.user

  const items = [
    [{
      label: 'Settings',
      icon: 'i-heroicons-cog-8-tooth'
    }], [{
      label: 'Documentation',
      icon: 'i-heroicons-book-open'
    }, {
      label: 'Changelog',
      icon: 'i-heroicons-megaphone'
    }, {
      label: 'Status',
      icon: 'i-heroicons-signal'
    }], [{
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle'
    }]
  ]
</script>

<template>

    <UDropdown class="hover:bg-gray-200 py-1 px-2	rounded-md"
               :items="items"
               :popper="{ offsetDistance: 8, placement: 'bottom', arrow: true, adaptive: true }">
      <div class="flex items-center" >
        <UAvatar size="sm" src="/avatarDefault.jpg"/>
        <span class="font-medium text-sm ml-2">Test Testovich</span>
      </div>
    </UDropdown>

</template>