'use client';

import * as React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { CookieIcon, ChevronRight, Shield, BarChart3, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const DEFAULT_COOKIE_CATEGORIES = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description:
      'Required for core website functionality, security, and basic operations. These cannot be disabled.',
    icon: <Shield className="h-4 w-4 text-accent-glow" />,
    isEssential: true,
  },
  {
    id: 'analytics',
    name: 'Analytics & Performance',
    description:
      'Help us understand how visitors interact with our website by collecting anonymous usage data.',
    icon: <BarChart3 className="h-4 w-4 text-accent-glow" />,
  },
  {
    id: 'marketing',
    name: 'Marketing & Advertising',
    description: 'Enable personalized ads and marketing content across websites and social platforms.',
    icon: <Target className="h-4 w-4 text-accent-glow" />,
  },
];

const STORAGE_KEY = 'cookie_preferences';
const CONSENT_KEY = 'cookie_consent_given';

function CookieConsent({
  className,
  categories = DEFAULT_COOKIE_CATEGORIES,
  cookiePolicyUrl = '/privacy',
  onAccept,
  onDecline,
}) {
  const [mounted, setMounted] = React.useState(false);
  const [showBanner, setShowBanner] = React.useState(false);
  const [showCustomizeDialog, setShowCustomizeDialog] = React.useState(false);

  const [preferences, setPreferences] = React.useState(() =>
    categories.map((cat) => !!cat.isEssential),
  );

  React.useEffect(() => {
    setMounted(true);

    try {
      const consentGiven = localStorage.getItem(CONSENT_KEY) === 'true';
      const storedPrefs = localStorage.getItem(STORAGE_KEY);

      if (consentGiven && storedPrefs) {
        const parsedPrefs = JSON.parse(storedPrefs);
        if (Array.isArray(parsedPrefs) && parsedPrefs.length === categories.length) {
          setPreferences(parsedPrefs);
          onAccept?.(parsedPrefs);
          return;
        }
      }

      setShowBanner(true);
    } catch (error) {
      console.error('Error reading cookie preferences:', error);
      setShowBanner(true);
    }
  }, [categories.length, onAccept]);

  const savePreferences = React.useCallback(
    (prefs) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        localStorage.setItem(CONSENT_KEY, 'true');
      } catch (error) {
        console.error('Error saving cookie preferences:', error);
      }

      setShowBanner(false);
      setShowCustomizeDialog(false);
      onAccept?.(prefs);
    },
    [onAccept],
  );

  const handleAcceptAll = React.useCallback(() => {
    const allTrue = categories.map(() => true);
    setPreferences(allTrue);
    savePreferences(allTrue);
  }, [categories, savePreferences]);

  const handleRejectAll = React.useCallback(() => {
    const essentialOnly = categories.map((cat) => !!cat.isEssential);
    setPreferences(essentialOnly);
    savePreferences(essentialOnly);
    onDecline?.();
  }, [categories, savePreferences, onDecline]);

  const handleSaveCustom = React.useCallback(() => {
    savePreferences(preferences);
  }, [preferences, savePreferences]);

  const handleToggle = React.useCallback(
    (index, checked) => {
      if (categories[index]?.isEssential) return;

      setPreferences((prev) => {
        const next = [...prev];
        next[index] = checked;
        return next;
      });
    },
    [categories],
  );

  if (!mounted) return null;

  return (
    <>
      <CookieBanner
        isVisible={showBanner}
        onAcceptAll={handleAcceptAll}
        onCustomize={() => setShowCustomizeDialog(true)}
        cookiePolicyUrl={cookiePolicyUrl}
        className={className}
      />

      <CookieCustomizeDialog
        open={showCustomizeDialog}
        onOpenChange={setShowCustomizeDialog}
        categories={categories}
        preferences={preferences}
        onToggle={handleToggle}
        onSave={handleSaveCustom}
        onRejectAll={handleRejectAll}
      />
    </>
  );
}

function CookieBanner({ isVisible, onAcceptAll, onCustomize, cookiePolicyUrl, className }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={cn(
            'fixed bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 z-50 w-full sm:max-w-md',
            className,
          )}
        >
          <div className="m-3 rounded-xl border border-white/10 bg-bg-card/95 shadow-card backdrop-blur-lg">
            <div className="flex items-center gap-3 p-6 pb-4">
              <div className="rounded-lg bg-accent/15 p-2">
                <CookieIcon className="h-5 w-5 text-accent-glow" />
              </div>
              <h2 className="text-lg font-semibold text-ink">Cookie Preferences</h2>
            </div>
            <div className="px-6 pb-4">
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                We use cookies to enhance your experience, personalize content, and analyze traffic.
              </p>
              <Link
                href={cookiePolicyUrl}
                className="group inline-flex items-center text-xs font-medium text-accent-glow transition-colors hover:underline"
              >
                Privacy Policy
                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 border-t border-white/10 bg-white/[0.03] p-4 sm:flex-row">
              <Button
                onClick={onAcceptAll}
                size="sm"
                className="h-9 w-full rounded-lg text-sm sm:flex-1"
              >
                Accept All
              </Button>
              <Button
                onClick={onCustomize}
                size="sm"
                variant="outline"
                className="h-9 w-full rounded-lg text-sm sm:flex-1"
              >
                Customize
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CookieCustomizeDialog({
  open,
  onOpenChange,
  categories,
  preferences,
  onToggle,
  onSave,
  onRejectAll,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="z-[200] gap-0 border-white/10 bg-bg-card/95 p-0 shadow-card backdrop-blur-lg sm:max-w-[500px]">
        <DialogHeader className="border-b border-white/10 p-6 pb-4">
          <DialogTitle className="text-xl font-semibold">Manage Cookies</DialogTitle>
          <DialogDescription>Customize your cookie preferences below.</DialogDescription>
        </DialogHeader>
        <div className="max-h-[calc(100vh-250px)] space-y-4 overflow-y-auto px-6 py-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className={cn(
                'rounded-xl border p-4 transition-colors duration-200',
                preferences[index]
                  ? 'border-accent/30 bg-accent/5'
                  : 'border-white/10 hover:border-white/20',
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'rounded-lg p-2 transition-colors',
                      preferences[index] ? 'bg-accent/15' : 'bg-white/5',
                    )}
                  >
                    {category.icon || <CookieIcon className="h-4 w-4 text-ink-muted" />}
                  </div>
                  <Label htmlFor={`cookie-${index}`} className="cursor-pointer text-base font-semibold">
                    {category.name}
                    {category.isEssential && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="ml-2 inline-flex items-center rounded-full bg-accent/15 px-2 py-1 text-xs font-medium text-accent-glow">
                              Required
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">These cookies cannot be disabled.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </Label>
                </div>
                <Switch
                  id={`cookie-${index}`}
                  checked={preferences[index] || false}
                  onCheckedChange={(checked) => onToggle(index, checked)}
                  disabled={category.isEssential}
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{category.description}</p>
            </motion.div>
          ))}
        </div>
        <DialogFooter className="border-t border-white/10 bg-white/[0.03] p-6">
          <div className="flex w-full flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button variant="outline" onClick={onRejectAll} className="min-w-[120px]">
              Reject All
            </Button>
            <Button onClick={onSave} className="min-w-[140px]">
              Save Preferences
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { CookieConsent };
