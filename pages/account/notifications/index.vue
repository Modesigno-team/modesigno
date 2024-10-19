<template>
  <div>
    <AppNav />
    <div class="mt-16">
      <AuthLayoutSidebar />
      <div class="lg:pl-72">
        <main class="py-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-gray-800 text-2xl">My Notifications</h2>
            <small class="text-xs">Manage all Notifications.</small>
          </div>

          <div class="max-w-7xl px-4 py-8 sm:px-6 lg:px-8 w-2/3">
            <div class="flex flex-col divide-y divide-dashed space-y-3">
              <SharedToggleGroup :title="`promotions`"
                  :subtitle="`Be the first to learn about promotions, daily deals, and other
        exclusive items.`">
                <SharedToggle
                  :title="`Email`"
                />
              </SharedToggleGroup>
              <SharedToggleGroup :title="`Orders`"
                  :subtitle="`Get progress notification on all orders.`">
                  <SharedToggle
                  :title="`Sms`"
                />
                <SharedToggle
                  :title="`Email`"
                />
              </SharedToggleGroup>
              <SharedToggleGroup :title="`Account`"
                  :subtitle="`Get notified on all account activities.`">
                <SharedToggle
                  :title="`Email`"
                />
              </SharedToggleGroup>
              <SharedToggleGroup :title="`Rewards & Gifts`"
                  :subtitle="`Get notified on rewards and gifts.`">
                  <SharedToggle
                  :title="`Sms`"
                />
                <SharedToggle
                  :title="`Email`"
                />
              </SharedToggleGroup>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
